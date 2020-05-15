export const getTodos = (user) => {
    const todos = window.localStorage.getItem(user);
    console.log(user)
    return todos ? JSON.parse(todos) : []
}

export const setTodos = (user, todos) => {
    window.localStorage.setItem(user, JSON.stringify(todos));
}