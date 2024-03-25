import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList() {

   const [todos, setTodos] = useState([]);

   function addTodo(todo) {
        const newTodo = {id: Date.now(), name: todo};
        setTodos([...todos, newTodo]);
   };

   function editTodo(id, newName) {
        const updatedTodos= todos.map(todo =>
            todo.id === id ? {...todo, name: newName} : todo
            )
        setTodos(updatedTodos);
   }

   function deleteTodo(id) {
        const remainingTodos = todos.filter(todo => todo.id !== id);
        setTodos(remainingTodos);
   }

  return (
    <div className='todo-content'>
        <h1>Todo List</h1>
        <form className='submitBox' onSubmit={ e => {
            e.preventDefault();
            addTodo(e.target.todo.value);
            e.target.todo.value = '';
        }} >
            <input type='text' name='todo' />
            <button type='submit'>Add Todo</button>
        </form>
        <ul className='todo-item-list'>
            {todos.map(todo => 
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onEdit={editTodo} 
                    onDelete={deleteTodo} 
                />)}
        </ul>
    </div>
  )
}

export default TodoList