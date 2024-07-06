import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props

  const onDelete = () => {
    onDeleteTodo(todoDetails.id)
  }

  return (
    <li className="list-item">
      <p className="paragraph">{todoDetails.title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
