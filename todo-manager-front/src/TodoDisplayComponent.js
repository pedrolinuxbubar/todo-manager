import React from "react";

class TodoDisplayComponent extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)

        this.onTODOStateChange = this.onTODOStateChange.bind(this);
    }

    onTODOStateChange(title) {
        // console.log("onTODOStateChange title = " + title);

        // let checkbox = document.getElementById('cbx-' + title)
        // if (checkbox) {
        //     let state = checkbox.getAttribute('checked');

        //     console.log("avant onTODOStateChange fetch")
        //     fetch("http://localhost:8080/todo-manager/todo-state-change?title=" + title + "&state=" + state).then(this.props.onTodoListChange()).catch(console.error);
        //     console.log("apres onTODOStateChange fetch")
        // }
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