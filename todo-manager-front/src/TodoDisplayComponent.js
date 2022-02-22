import React from "react";

class TodoDisplayComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onTODOStateChange(title) {
        console.log("title = " + title);

        var checkbox = document.getElementById('cbx-' + title)

        if (checkbox) {
            var state = checkbox.getAttribute('checked');

            fetch("http://localhost:8080/todo-manager/todo-state-change?title=" + title + "&state=" + state).catch(console.error);
        }

        var newTodoList = Object.assign({}, this.props.todolist);
        this.props.onTodoListChange(newTodoList);
    }

    render() {
        return (<div>
            <div>
                <label>List Of TODOs : </label>
            </div>
            <div>
                <ul>
                    {this.props.todolist ? this.props.todolist.map(todo => {
                        return <li>
                            <label id={'lbl-' + todo.title}>{todo.title}</label>
                            <input id={'cbx-' + todo.title} type="checkbox" defaultChecked={todo.state} onClick={this.onTODOStateChange(todo.title)} />
                        </li>
                    }) : <div></div>}
                </ul>
            </div>
        </div>);
    }
}

export default TodoDisplayComponent;