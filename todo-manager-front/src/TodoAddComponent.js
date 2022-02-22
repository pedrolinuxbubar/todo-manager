import React from "react";

class TodoAddComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddTodoButtonClick() {
        var value = document.getElementById('ipt-addtodo').value;
        fetch("http://localhost:8080/todo-manager/create-todo?title=" + value).catch(console.error);

        var newTodoList = Object.assign({}, this.props.todolist);
        newTodoList.push(value);
        this.props.onTodoListChange(newTodoList);
    }

    render() {
        return (<div>
            <input id={'ipt-addtodo'} />
            <button id={'btn-addtodo'} onClick={this.onAddTodoButtonClick}>Add Todo</button>
        </div>);
    }
}

export default TodoAddComponent;