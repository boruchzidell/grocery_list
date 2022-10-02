document.addEventListener('DOMContentLoaded', () => {
  let getElement = (selector) => document.querySelector(selector);

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let item = getElement('#item').value;
    let qty = getElement('#quantity').value || 1;

    let li = document.createElement('li');
    getElement('#list').appendChild(li);

    li.appendChild(document.createTextNode(`${qty} ${item}`));

    this.reset();
  });
});
