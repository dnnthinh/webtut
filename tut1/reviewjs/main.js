const todos = [{
        title: "Do ex1",
        isCompleted: false
    },
    {
        title: "Write essay",
        isCompleted: true
    }
]

function getTodos() {
    var items = '';
    todos.forEach(todo => {
        items += `<li>${todo.title} - ${todo.isCompleted}</li>`;
    });
    document.body.innerHTML = items;
}


function createTodo(todo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            todos.push(todo);
            const error = false;
            if (!error) {
                resolve("ok");
            } else {
                reject('error: something wrong');
            }
        }, 1000)
    })
}

async function init() {
    try{
        const data = await createTodo({
            title: 'reading books',
            isCompleted: false
        });
        getTodos();
    }
    catch(err) {
        console.log(err)
    }
};

init();

async function getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/10');
    const JSONData = await data.json();
    console.log(JSONData);
}

getData();

