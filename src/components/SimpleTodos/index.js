import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: uuidv4(),
    title: 'Book the ticket for today evening',
    isEditing: false,
  },
  {
    id: uuidv4(),
    title: 'Rent the movie for tomorrow movie night',
    isEditing: false,
  },
  {
    id: uuidv4(),
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isEditing: false,
  },
  {
    id: uuidv4(),
    title: 'Drop the parcel at Bloomingdale',
    isEditing: false,
  },
  {
    id: uuidv4(),
    title: 'Order fruits on Big Basket',
    isEditing: false,
  },
  {
    id: uuidv4(),
    title: 'Fix the production issue',
    isEditing: false,
  },
  {
    id: uuidv4(),
    title: 'Confirm my slot for Saturday Night',
    isEditing: false,
  },
  {
    id: uuidv4(),
    title: 'Get essentials for Sunday car wash',
    isEditing: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    textInput: '',
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickAddBtn = () => {
    const {todoList, textInput} = this.state
    const newTodo = {
      id: uuidv4(),
      title: textInput,
    }
    const updatedTodoList = [...todoList, newTodo]
    this.setState({todoList: updatedTodoList, textInput: ''})
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(each => each.id !== id)

    this.setState({todoList: filteredTodoList})
  }

  editTodo = id => {
    const {todoList} = this.state
    this.setState({
      todoList: todoList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {...eachTodo, isEditing: true}
        }
        return eachTodo
      }),
    })
  }

  changeTitle = (todoTitle, id) => {
    const {todoList} = this.state
    this.setState({
      todoList: todoList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {...eachTodo, title: todoTitle}
        }
        return eachTodo
      }),
    })
  }

  saveTodo = id => {
    const {todoList} = this.state
    this.setState({
      todoList: todoList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {...eachTodo, isEditing: false}
        }
        return eachTodo
      }),
    })
  }

  render() {
    const {todoList, textInput, isEditing} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-container">
            <input
              className="input-element"
              type="text"
              placeholder="Enter Todo"
              value={textInput}
              onChange={this.onChangeTextInput}
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.onClickAddBtn}
            >
              Add
            </button>
          </div>
          <ul className="list-container">
            {todoList.map(eachTodo => (
              <TodoItem
                todo={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
                isEditing={isEditing}
                changeTitle={this.changeTitle}
                saveTodo={this.saveTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
