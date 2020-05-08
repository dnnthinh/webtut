export const getTodos = () => {
    const todos = window.localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : []
}

export const setTodos = (todos) => {
    console.log(todos)
    window.localStorage.setItem('todos', JSON.stringify(todos));
}