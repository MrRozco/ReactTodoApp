import React from 'react'
import { useState } from 'react'

function TodoItem({todo, onEdit, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        onEdit(todo.id, newName);
        setNewName('');
        setIsEditing(false);
    }

    const editingTemplate = (
        <form className = 'editBox' onSubmit={handleSubmit}>
            <input 
                type='text' 
                id={todo.id} 
                value={newName} 
                onChange={handleChange} 
            />
            <button type='submit'>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    )

    const viewTemplate = (
        <li className='todoItem'>
            <span>{todo.name}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )

    return (
        <div>
            {isEditing ? editingTemplate : viewTemplate}
        </div>
    )
   
}

export default TodoItem