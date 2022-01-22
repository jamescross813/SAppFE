import React, { Component } from 'react'

class ProjectInputComponent extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Project Title:</label>
                        <input type="text" name="project_title" value={this.state.project_title} onChange={this.handleChange}/><br/>
                        
                </form>
            </div>
        )
    }
}

export default ProjectInputComponent