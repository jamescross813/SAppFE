import React, { Component } from 'react'

class ToDoInputComponent extends Component{
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                    <label>To Do Task:</label>
                        <input type="text" name="to_do_task" value={this.state.to_do_task} onChange={this.handleChange}/><br/>
                        
                </form>
            </div>
        )
    }
}

export default ToDoInputComponent