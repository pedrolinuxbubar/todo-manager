import React from 'react';
import './TodoManager.css';
import TodoAddComponent from './TodoAddComponent';
import TodoDisplayComponent from './TodoDisplayComponent';

class TodoManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todolist: [] };
    this.getTODOList();
  }

  getTODOList() {
    fetch("http://localhost:8080/todo-manager/list-todo").then(response => response.json())
      .then(data => {
        this.setState({ todolist: data });
      }).catch(console.error);
  }

  onTodoListChange(newTodoList) {
    this.setState({ todolist: newTodoList });
  }

  render() {
    return (
      <div>
        <TodoDisplayComponent props={this.state.todolist, () => this.onTodoListChange} />
        <TodoAddComponent props={this.state.todolist, () => this.onTodoListChange} />
      </div >
    );
  }
}

export default TodoManager;
