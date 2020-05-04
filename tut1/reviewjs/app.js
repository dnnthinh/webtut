const form = document.querySelector('#my-form');
const todoText = document.querySelector('.textTodo');
const btn = document.querySelector('.btn');
const list = document.querySelector('#listTodo');


function appendItem(todo) {
    let li = document.createElement('li');
    if (todo != '') {
        li.innerHTML = `
            <input type='checkbox'></input>
            <span>${todo}</span>
            <span class="closeItem">X</span>
        `
        listTodo.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getTodos().map((todo) => {
        appendItem(todo);
    })
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(todoText.value !== ''){
        appendItem(todoText.value);
        addTodo(todoText.value);
    }
    todoText.value = '';
})

function getTodos() {
    let todos = [];
    if (localStorage.getItem('todoList') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todoList'));
    }

    return todos;
}

function addTodo(todo) {
    let todos = getTodos();
    todos.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todos));
}

function removeItem () {
    const closeItem = document.querySelectorAll('.closeItem');
    console.log(closeItem)

    li.classList.add('removeItem');

}


