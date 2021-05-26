let button = document.querySelector("button");
let list = document.querySelector("ul");
let task = document.querySelector("input");

button.addEventListener("click", (e) => {
  e.preventDefault();
  createItem(task.value);
  task.value = "";
  task.focus();
});

let createItem = (x) => {
  let item = document.createElement("li");
  item.innerHTML = `${x} <button onclick = deleteItem(this)>  Delete </button`;
  list.appendChild(item);
};

let deleteItem = (itemToDelete) => {
  itemToDelete.parentElement.remove();
};
