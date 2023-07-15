import { useState } from 'react';
import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([])

  const addItemToList = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, // display the previous todo, and add a new todo object
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      },
    ]) // this is the wrong way of setting todos because the next todo added will overwrite the previous one
  }


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
