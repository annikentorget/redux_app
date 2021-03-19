export const saveToLocalStorage = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return;
};