import React from "react";

class TodoAddComponent extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)

        this.onAddTodoButtonClick = this.onAddTodoButtonClick.bind(this);
    }

    onAddTodoButtonClick() {
        console.log("onAddTodoButtonClick");

        let input = document.getElementById('ipt-addtodo');
        let value = input.value;
        console.log("avant onAddTodoButtonClick fetch")
        fetch("http://localhost:8080/todo-manager/create-todo?title=" + value).then(this.props.onTodoListChange()).catch(console.error);
        console.log("apres onAddTodoButtonClick fetch")
        input.value = '';
    }

    render() {
        return (<div>
            <input id={'ipt-addtodo'} />
            <button id={'btn-addtodo'} onClick={this.onAddTodoButtonClick}>Add Todo</button>
        </div>);
    }
}

export default TodoAddComponent;