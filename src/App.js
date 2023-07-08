import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo,removeTodo,toggleTodo } from './features/todoSlice';

function App() {
  const [newTodo,setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.storeTodo.todos);

  const handleAddTodo = () => {
    if (newTodo.trim() !== ''){
      dispatch(addTodo({
        id: Date.now(),
        text: newTodo,
        completed: false
      }));
      setNewTodo('')
    }
  }
  
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  }

  return (
    <div className='todo-container'>
     <h1 className="todo-title">Todo List</h1>
     <div className="add-todo">
      <input
        type='text'
        placeholder='Add Task'
        value = {newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}> Add Todo</button>
    </div>
    <ul className="todo-list">
      {todos.map(todo => (
        <li key = {todo.id} >
          <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button className="actions" onClick={()=> handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
