import React from "react";

class TodoAddComponent extends React.Component {
    constructor(props) {
        super(props)

        this.onAddTodoButtonClick = this.onAddTodoButtonClick.bind(this)
        this.onClearTodoListButtonClicked = this.onClearTodoListButtonClicked.bind(this)
    }

    onAddTodoButtonClick() {
        let input = document.getElementById('ipt-addtodo')
        let value = input.value;
        fetch("http://localhost:8080/todo-manager/create-todo?title=" + value).then(this.props.onTodoListChange()).catch(console.error)
        input.value = ''
    }

    onClearTodoListButtonClicked() {
        fetch("http://localhost:8080/todo-manager/clear-todo-list").then(this.props.onTodoListChange()).catch(console.error)
    }

    render() {
        return (<div>
            <input id={'ipt-addtodo'} />
            <button id={'btn-addtodo'} onClick={this.onAddTodoButtonClick}>Add Todo</button>
            <button id={'btn-cleartodo'} onClick={this.onClearTodoListButtonClicked}>Clear Todo list</button>
        </div>);
    }
}

export default TodoAddComponent;