import React, { useState } from 'react'
import './App.css'
import shortid from 'shortid'
import Todo from './Components/Todo'

function App () {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        id: shortid.generate(),
        name: todoInput,
        complete: false
      }
    ])
    setTodoInput('')
  }

  const deleteTodo = id => {
    setTodos(todos.filter(({id: todoId}) => todoId !== id))
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    }))
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          name='todo'
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
        />
      </form>
      {todos.length ? (
        <ul>
          {todos.map(todo => (
            <Todo 
            key={todo.id} 
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default App
