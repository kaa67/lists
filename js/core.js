// type Category = {
//   title: string
//   items: string[]
// }

const categoryItemMOCK = {
  title: "Оборудование",
  items: [
    'Микроскопы',
    'Пулеметы',
    'Водомёты',
    'Коллайдеры',
    'Лом',
  ]
}

const initialStore = {
  categories: [], // Category[]
  categoryIndex: null // null || number
}

if (!localStorage.getItem('store')) {
  localStorage.setItem(
    'store',
    JSON.stringify(initialStore)
  )
}

// Глобальное хранилище
const store = JSON.parse(localStorage.getItem('store'))

// Валидация и корректировка стора
if (!store?.categories?.length) {
  store.categories = []
  store.categoryIndex = null
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
    li.textContent = category.title
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
  store.categories.push(categoryItemMOCK)
  store.categoryIndex = store.categories.length - 1

  refresh()
}

function clear(element) {
  while(element.firstElementChild) {
     element.firstElementChild.remove();
  }
}
