import React from 'react';

const ReactMemo = React.memo(({ todos }) => {
  console.log('ReactMemo rendered');
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
});

export default ReactMemo;
