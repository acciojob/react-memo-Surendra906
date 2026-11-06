import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = (task = 'New todo') => {
    setTodos((prevTodos) => [...prevTodos, task]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Management App</h1>
      
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <hr />

      <div>
        <button onClick={() => addTodo('New todo')}>Add Todo</button>
        <UseMemo addTodo={addTodo} />
        <ReactMemo todos={todos} />
      </div>
    </div>
  );
}

export default App;
