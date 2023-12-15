import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo, editTodo, changeTitle, saveTodo} = props
  const {id, title, isEditing} = todo

  const onChangeTodoTitle = event => {
    changeTitle(event.target.value, id)
  }

  const onDelete = () => {
    deleteTodo(id)
  }

  const onClickEditBtn = () => {
    editTodo(id)
  }

  const onClickSaveBtn = () => {
    saveTodo(id)
  }

  return (
    <li className="todo-container">
      {isEditing ? (
        <input
          type="text"
          className="input-element"
          value={title}
          onChange={onChangeTodoTitle}
        />
      ) : (
        <p className="todo">{title}</p>
      )}
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
      {isEditing ? (
        <button className="btn" type="button" onClick={onClickSaveBtn}>
          Save
        </button>
      ) : (
        <button className="btn" type="button" onClick={onClickEditBtn}>
          Edit
        </button>
      )}
    </li>
  )
}

export default TodoItem
