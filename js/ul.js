document.addEventListener("DOMContentLoaded", fetchList);

function fetchList() {
  fetch('ul.json').then(
    (response) => response.json()
  ).then(
    (json) => {
      ulCreate(json);
    }
  )
}

function ulCreate (json) {
  const divIdUl = document.querySelector('#ul');
  const ul = document.createElement('ul');
  ul.classList.add('list-group');

  json.ulList.forEach((name, index) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    if (index === json.current) {
      li.classList.add('active');
    }

    li.textContent = name;
    ul.appendChild(li);
  });

  divIdUl.appendChild(ul);
}
