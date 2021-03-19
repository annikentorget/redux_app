import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addTodo, completeTodo, deleteTodo, selectTodos } from './todosSlice';

import { saveToLocalStorage } from '../../utils/saveToLocalStorage';

export function Todos() {
    const todos = useSelector(selectTodos);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (inputValue !== '') {
            dispatch(addTodo({ name: inputValue }));
        }
        return;
    };

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <input
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder={'Todo...'}
                />
                <button onClick={handleSubmit}>Add</button>
            </form>
            {todos.map((todo, index) => (
                <div key={index}>
                    <div>
                        <h3>{todo.name}</h3>
                        <p>{todo.completed ? 'completed' : 'not completed'}</p>
                    </div>

                    <div>

                        <button onClick={() => dispatch(completeTodo({ index }))}>
                            complete
                        </button>

                        <button onClick={() => dispatch(deleteTodo({ index }))}>
                            delete
                        </button>

                    </div>
                </div>
            ))}
            <button onClick={() => saveToLocalStorage(todos)}>Save todos</button>
        </div>
    );
}