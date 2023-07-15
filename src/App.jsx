import { useState } from 'react';
import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([])

  const addItemToList = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => {
        // now setTodo is a function that takes in the parameter currentTodos
        return [
          ...currentTodos, // instead of using ...todos, using a parameter called currentTodos so the app will no reset and the value will not be overwritten
          {
            id: crypto.randomUUID(),
            title: newItem,
            completed: false
          }
        ]
      }
    )
  }
  // Every time you need to use the current value, make sure to pass it through a function, not a value itself


  return (
    <>
    <form onSubmit={addItemToList} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item</label>
        <input value={newItem} onChange={(e => setNewItem(e.target.value))} type="text" id="item" ></input>
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">
      Todo List
    </h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          My added item
        </label>
        <button className="btn btn-danger">x</button>
      </li>
    </ul>

    </>
  )
}

export default App
