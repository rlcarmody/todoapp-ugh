import React from 'react'

const Todo = (
    {todo: { id, name, complete },
    deleteTodo, 
    toggleComplete,
}) => {
  return (
    <div>
      <button type='button' onClick={() => deleteTodo(id)}>
        Delete
      </button>
      <li
        style={{
          listStyle: 'none',
          textDecoration: complete ? 'line-through' : 'none',
          display: 'inline-block'
        }}
        onClick={() => toggleComplete(id)}
      >
        {name}
      </li>
    </div>
  )
}

export default Todo
