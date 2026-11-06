import React, { useState } from 'react';

function UseMemo({ addTodo }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length <= 5) {
      setError('Task must be more than 5 characters');
      return;
    }
    setError('');
    addTodo(input);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter custom task"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UseMemo;
