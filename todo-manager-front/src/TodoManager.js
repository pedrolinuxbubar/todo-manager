import React from 'react';

import TodoAddComponent from './TodoAddComponent';
import TodoDisplayComponent from './TodoDisplayComponent';

class TodoManager extends React.Component {
  constructor(props) {
    super(props)

    this.state = { todolist: [] }
    this.getTODOList()

    this.onTodoListChange = this.onTodoListChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    // If TODO list is empty, add default values
    if (this.state.todolist.length === 0) {
      let defaultTODOs = ['task 1', 'task 2', 'task 3'];
      defaultTODOs.forEach(value =>
        fetch("http://localhost:8080/todo-manager/create-todo?title=" + value + "&description=Task description")
      )
    }
  }

  // sortTasks(a, b) {
  //   if (a.state == "false" && b.state == "true") {
  //     return -1;
  //   }
  //   else if (a.state == "true" && b.state == "false") {
  //     return 1;
  //   }
  //   else {
  //     return 0;
  //   }
  // }

  getTODOList() {
    fetch("http://localhost:8080/todo-manager/list-todo").then(response => response.json())/*.then(jsonObject => jsonObject.sort(this.sortTasks))*/
      .then(data => {
        this.setState({ todolist: data })
      }).catch(console.error)
  }

  onTodoListChange() {
    this.getTODOList()
  }

  render() {
    return (
      <div>
        <TodoDisplayComponent todolist={this.state.todolist} onTodoListChange={this.onTodoListChange} />
        <TodoAddComponent todolist={this.state.todolist} onTodoListChange={this.onTodoListChange} />
      </div>
    );
  }
}

export default TodoManager;
