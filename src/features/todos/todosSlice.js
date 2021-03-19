import { createSlice } from '@reduxjs/toolkit';

let initialTodos = [
    { name: 'learn react', completed: false },
    { name: 'cure covid', completed: false },
    { name: 'pass exams', completed: false}
];

if (localStorage.getItem('todos')) {
    initialTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(initialTodos);
}

export const todosSlice = createSlice ({
    name: 'todos',
    initialState: {
        value: initialTodos
    },

    reducers: {
        addTodo: (state, action) => {
            state.value.push( 
                { name: action.payload.name, completed: false }
                );
        },
        completeTodo: (state, action) => {
            let item = state.value[action.payload.index];
            item.completed = !item.completed;
        },

        deleteTodo: (state, action) => {
            state.value.splice(action.payload.index, 1);
        }
    }
});

export const selectTodos = state => state.todos.value;
export const { addTodo, completeTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;