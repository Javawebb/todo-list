const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const todos = document.querySelector(".todos");
const info = document.querySelector(".footer-info");
const clear = document.querySelector(".clear");
const active = document.querySelector(".active");
const all = document.querySelector('.all')
const complete = document.querySelector(".complete");
let items = 0;

info.innerText = items === 0 ? "no item yet" : `${items} item left`;

form.onsubmit = (event) => {
  event.preventDefault();
  let inputValue = input.value;

  if (!inputValue.trim()) {
    return;
  } else {
    todos.appendChild(createTodo(inputValue));
    input.value = "";
    items++;
    info.innerText = `${
      items < 2 ? +items + " item left" : items + " items left"
    }`;
  }
};

function createTodo(title) {
  const li = document.createElement("li");
  li.className = "todos-todo";
  li.style.opacity = 0
  li.style.transform = 'translateY(-100%)'
  li.style.transition = "500ms"

  setTimeout(() => {
    li.style.opacity = 1
    li.style.transform = 'translateY(0)'
  },500)

  const button = document.createElement("button");
  button.className = "todos-todo__btn";

  button.onclick = (event) => {
    button.parentElement.classList.toggle("completed");
  };

  const icon = document.createElement("span");
  icon.className = "icon";
  icon.innerHTML = "&#10003;";

  const span = document.createElement("span");
  span.className = "todos-todo__title";
  span.innerText = title;

  button.appendChild(icon);

  li.appendChild(button);
  li.appendChild(span);

  return li;
}

clear.onclick = () => {
  const completed = document.querySelectorAll(".completed");
  
  for (let i = 0; i < completed.length; i++) {
    completed[i].style.opacity = 0
    setTimeout (() => {
      completed[i].remove();
    },200)
    const todos = document.querySelectorAll(".todos-todo");
    info.innerText = `${
      todos.length < 2
        ? todos.length + " item left"
        : todos.length + " items left"
    }`;
    items = todos.length;
  }
};

active.onclick = () => {
  const todos = document.querySelectorAll(".todos-todo");
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].classList.contains("completed")) {
			todos[i].style.display = "none"
    }
  }
	all.classList.remove('active-btn')
	active.classList.add('active-btn')
		complete.classList.remove("active-btn");

};

all.onclick = () => {
  const todos = document.querySelectorAll(".todos-todo");

	for(let i = 0; i < todos.length; i++){
		todos[i].style.display = 'flex'
	}
		all.classList.add("active-btn");
    active.classList.remove("active-btn");
		complete.classList.remove("active-btn");

}

complete.onclick = () => {
  const todos = document.querySelectorAll(".todos-todo");
	for (let i = 0; i < todos.length; i++) {
    if(todos[i].classList.contains('completed')){
			todos[i].style.display = 'flex';
		} else{
			todos[i].style.display = "none";
		}
  }
		all.classList.remove("active-btn");
    active.classList.remove("active-btn");
		complete.classList.add('active-btn')
}