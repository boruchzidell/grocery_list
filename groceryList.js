document.addEventListener('DOMContentLoaded', () => {
  let getElement = (selector) => document.querySelector(selector);

  let item = getElement('#item');
  let qty = getElement('#quantity');
  let list = getElement('#list');
  let button = getElement('button');

  function addLi(content) {
    let li = document.createElement('li');
    li.textContent = content;
    list.appendChild(li);
  }

  function loadData() {
    itemsArray.forEach(addLi);
  }

  // Initialize array
  let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];

  loadData();

  // Add items
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let groceryItem = `${qty.value || 1} ${item.value}`;
    itemsArray.push(groceryItem);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    while (list.firstChild) {
      list.firstChild.remove();
    }

    loadData();

    this.reset();  // clear form
  });

  // Obliterate entire list
  button.addEventListener('click', function (e) {
    localStorage.clear();

    while (list.firstChild) {
      list.firstChild.remove();
    }
  });
});
