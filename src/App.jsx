import "./style.css";

const App = () => {
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item</label>
        <input type="text" id="item" ></input>
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
