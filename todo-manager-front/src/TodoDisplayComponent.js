import React from "react";

class TodoDisplayComponent extends React.Component {
    onTODOStateChange(cbx) {
        fetch("http://localhost:8080/todo-manager/todo-state-change?title=" + cbx.target.name + "&state=" + cbx.target.checked).then(this.props.onTodoListChange()).catch(console.error)
    }

    render() {
        return (<div>
            <div>
                <label>List Of TODOs : </label>
            </div>
            <div>
                <ul>
                    {this.props.todolist ? this.props.todolist.map(todo => {
                        return <li key={todo.title}>
                            <a id={'lbl-' + todo.title} style={{ "textDecoration": todo.state === true ? "line-through" : "" }} href={'/todo-details/' + todo.title + '/' + todo.description}>{todo.title}</a>
                            <input id={'cbx-' + todo.title} name={todo.title} type="checkbox" defaultChecked={todo.state} onClick={this.onTODOStateChange.bind(this)} />
                        </li>
                    }) : <div></div>}
                </ul>
            </div>
        </div >);
    }
}

export default TodoDisplayComponent;
