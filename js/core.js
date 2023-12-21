// type ListItem = {
//   title: string
//   items: string[]
// }

// const store = {
//   list: [
//     {
//       title: "Оборудование",
//       items: [
//         'Микроскопы',
//         'Пулеметы',
//         'Водомёты',
//         'Коллайдеры',
//         'Лом',
//       ]
//     },
//     {
//       title: "Транспорт",
//       items: [
//         'Машины',
//         'Велики',
//         'Самолеты',
//         'Пешком',
//       ]
//     },
//   ], // ListItem[]
//   listIndex: 0, // null | number
// }

// localStorage.store = JSON.stringify(store)

if (!localStorage.store) {
  localStorage.store = JSON.stringify({
    list: [],
    listIndex: null,
  })
}

const store = JSON.parse(localStorage.store)
const addCategoryBtn = document.querySelector('#addCategoryBtn')

document.addEventListener("DOMContentLoaded", init)
addCategoryBtn.addEventListener("click", addCategory)

function init () {
  refresh()
}

function refresh () {
  listGenerate()
  contentGenerate()
}

function listGenerate () {
  const wrapper = document.querySelector('#listWrapper')
  wrapper.innerHtml = ''

  if (!store.list.length) {
    return
  }

  const ul = document.createElement('ul')
  ul.classList.add('list-group')

  store.list.forEach((item, index) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item')

    if (index === store.listIndex) {
      li.classList.add('active')
    }

    li.textContent = item.title
    ul.appendChild(li)
  });

  wrapper.appendChild(ul)
}

function contentGenerate () {
  const wrapper = document.querySelector('#contentWrapper')
  listWrapper.innerHtml = ''

  if (store.listIndex === null || !store.list[store.listIndex]) {
    return;
  }

  const { title, items } = store.list[store.listIndex]

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
  });

  wrapper.appendChild(ul)
}

function addCategory() {
  store.list.push({
    title: "Оборудование",
    items: [
      'Микроскопы',
      'Пулеметы',
      'Водомёты',
      'Коллайдеры',
      'Лом',
    ]
  })

  store.listIndex = store.list.length - 1

  refresh()
}