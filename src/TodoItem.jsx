/* eslint-disable react/prop-types */
export function TodoItem({ completed, id, title, completeTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                type="checkbox"
                checked={completed}
                onChange={ e => completeTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
            onClick={() => deleteTodo(id)}
            className="btn btn-danger">x
            </button>
        </li>
    )
}
