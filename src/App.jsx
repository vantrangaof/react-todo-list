import { useState } from 'react';
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
      setTodos(currentTodos => {
        // now setTodo is a function that takes in the parameter currentTodos
        return [
          ...currentTodos, // instead of using ...todos, using a parameter called currentTodos so the app will no reset and the value will not be overwritten
          {
            id: crypto.randomUUID(),
            title,
            completed: false
          }
        ]
      }
    )
  }
// Every time you need to use the current value, make sure to pass it through a function, not a value itself

  function completeTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">
      Todo List
      </h1>
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App

