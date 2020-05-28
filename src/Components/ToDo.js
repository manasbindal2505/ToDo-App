import React, { Component } from 'react'
import "./css/todo.css"

export default class ToDo extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditing:false,
            task:this.props.task
        }
        this.handleRemove=this.handleRemove.bind(this);
        this.toggleForm=this.toggleForm.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleToggle=this.handleToggle.bind(this);

    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    handleUpdate(evt){
        evt.preventDefault();
        // take new task data and pass to the parent
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing:false
        })
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleToggle(evt){
        this.props.toggleTodo(this.props.id)
    }
    render(){
        let result;
        if(this.state.isEditing){
            result=(
                <div className="todo">
                    <form onSubmit={this.handleUpdate} className='todo-edit-form'>
                        <input 
                            type="text " 
                            value={this.state.task} 
                            name="task"
                            onChange={this.handleChange} 
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        else{
            result=(
                <div className="todo">
                    <li className={this.props.completed ? " todo-task completed" : "todo-task"}
                        onClick={this.handleToggle}
                    >
                        {this.props.task}
                    </li>
                    <div className="todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class="fas fa-pen" />
                        </button>
                        <button onClick={this.handleRemove} >
                            <i class="fas fa-trash" />  
                        </button>
                    </div>
                </div>
            )
        }
        return(
            result 
        )
        
    }
}