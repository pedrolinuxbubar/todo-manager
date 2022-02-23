import React from 'react';
import './TodoManager.css';
import TodoAddComponent from './TodoAddComponent';
import TodoDisplayComponent from './TodoDisplayComponent';

class TodoManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todolist: [] };
    this.getTODOList();

    this.onTodoListChange = this.onTodoListChange.bind(this);
  }

  async getTODOList() {
    fetch("http://localhost:8080/todo-manager/list-todo").then(response => response.json())
      .then(data => {
        this.setState({ todolist: data });
      }).catch(console.error);
  }

  onTodoListChange() {
    this.getTODOList();
  }

  render() {
    return (
      <div>
        <TodoDisplayComponent todolist={this.state.todolist} onTodoListChange={this.onTodoListChange} />
        <TodoAddComponent todolist={this.state.todolist} onTodoListChange={this.onTodoListChange} />
      </div >
    );
  }
}

export default TodoManager;
