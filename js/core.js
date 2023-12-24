// type Category = {
//   title: string
//   items: string[]
// }

// Получить из стора
const store = getStore()
let newCategoryName = ''

if (!isStoreValid()) {
  storeNormalisation()
  saveStore()
}

const addCategoryBtn = document.querySelector('#addCategoryBtn')
addCategoryBtn.addEventListener("click", addCategory)

function init () {
  refresh()
}

function refresh () {
  categoriesRefresh()
  itemsRefresh()
}

function categoriesRefresh () {
  const wrapper = document.querySelector('#categoriesWrapper')
  clear(wrapper)

  const { categories, categoryIndex } = store

  if (!categories.length) {
    return
  }

  const ul = document.createElement('ul')
  ul.classList.add('list-group')

  categories.forEach((category, index) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')

    if (index === categoryIndex) {
      li.classList.add('active')
    }

    const deleteCategotyBtn = document.createElement('button')
    deleteCategotyBtn.classList.add('btn', 'btn-sm', 'btn-danger')
    deleteCategotyBtn.innerText = 'Удалить'

    deleteCategotyBtn.onclick = function() {
      if (!confirm (`Категория "${category.title} (${index})" будет удалена.\nВы уверены?`)) {
        return
      }

      store.categories = store.categories.filter (
        (_, indexToDelete) => indexToDelete !== index
      )

      store.categoryIndex = store.categories.length - 1

      saveStore()
      refresh()
    }

    li.textContent = `${category.title} (${index})`
    li.appendChild(deleteCategotyBtn)
    ul.appendChild(li)
  })

  wrapper.appendChild(ul)
}

function itemsRefresh () {
  const wrapper = document.querySelector('#itemsWrapper')
  clear(wrapper)

  const { categories, categoryIndex } = store

  if (categoryIndex === null) {
    return
  }

  const category = categories[categoryIndex]

  if (!category) {
    return
  }

  const { title, items } = category

  const h3 = document.createElement('h3')
  h3.innerHTML = title
  wrapper.appendChild(h3)

  const ul = document.createElement('ul')
  ul.classList.add('list-group')

  items.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('list-group-item')

    li.textContent = item
    ul.appendChild(li)
  })

  wrapper.appendChild(ul)
}

function addCategory() {
  store.categories.push({
    title: newCategoryName,
    items: []
  })

  newCategoryName = ''
  const newCategoryInput = document.querySelector('#newCategoryInput')
  newCategoryInput.value = ''
  document.querySelector('#addCategoryBtn').disabled = true

  store.categoryIndex = store.categories.length - 1

  saveStore()
  refresh()
}

function clear(element) {
  while(element.firstElementChild) {
     element.firstElementChild.remove();
  }
}

const newCategoryInput = document.querySelector('#newCategoryInput')
newCategoryInput.oninput = (event) => {
  newCategoryName = event.target.value

  document.querySelector('#addCategoryBtn').disabled = !newCategoryName
}

function getStore () {
  const storeString = localStorage.getItem('store')

  return !storeString ? {} : JSON.parse(storeString)
}

function saveStore () {
  localStorage.setItem('store', JSON.stringify(store))
}

// Вернет boolean - признак валидности данных
function isStoreValid () {
  // Полная валидация всех компонент
  return (
    typeof store === 'object' &&
    isCategoriesValid() &&
    isCategoryIndexValid()
  );
}

function storeNormalisation () {
  if (typeof store !== 'object') {
    store = {}
  }

  if (!isCategoriesValid()) {
    store.categories = []
    store.categoryIndex = null
  }

  if (!isCategoryIndexValid()) {
    store.categoryIndex = null
  }
}

function isCategoriesValid () {
  // Проверка говно, надо проверять каждый объект массива
  // (В нашем случае уместно пропустить)
  return Array.isArray(store?.categories);
}

function isCategoryIndexValid () {
  const currentType = typeof store?.categoryIndex
  return ['null', 'number'].includes(currentType);
}
