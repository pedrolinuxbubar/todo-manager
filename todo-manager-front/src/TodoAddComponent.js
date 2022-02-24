import React from "react";

class TodoAddComponent extends React.Component {
    constructor(props) {
        super(props)

        this.onAddTodoButtonClick = this.onAddTodoButtonClick.bind(this)
        this.onClearTodoListButtonClicked = this.onClearTodoListButtonClicked.bind(this)
    }

    onAddTodoButtonClick() {
        let titleInput = document.getElementById('ipt-addtodo-title')
        let descriptionInput = document.getElementById('ipt-addtodo-description')
        let title = titleInput.value
        let description = descriptionInput.value
        fetch("http://localhost:8080/todo-manager/create-todo?title=" + title + "&description=" + description).then(this.props.onTodoListChange()).catch(console.error)
        titleInput.value = ''
        descriptionInput.value = ''
    }

    onClearTodoListButtonClicked() {
        fetch("http://localhost:8080/todo-manager/clear-todo-list").then(this.props.onTodoListChange()).catch(console.error)
    }

    render() {
        return (<div>
            <div>
                <label>Title</label>
                <input id={'ipt-addtodo-title'} />
            </div>
            <div>
                <label>Description</label>
                <input id={'ipt-addtodo-description'} />
            </div>
            <div>
                <button id={'btn-addtodo'} onClick={this.onAddTodoButtonClick}>Add Todo</button>
                <button id={'btn-cleartodo'} onClick={this.onClearTodoListButtonClicked}>Clear Todo list</button>
            </div>
        </div>);
    }
}

export default TodoAddComponent;
