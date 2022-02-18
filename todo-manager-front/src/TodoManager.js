import React from 'react';
import './TodoManager.css';
import TodoAddComponent from './TodoAddComponent';
import TodoDisplayComponent from './TodoDisplayComponent';

class TodoManager extends React.Component {
  render() {
    return (
      <div>
        <TodoDisplayComponent />
        <TodoAddComponent />
      </div >
    );
  }
}

export default TodoManager;
