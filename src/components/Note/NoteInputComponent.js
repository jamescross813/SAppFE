import React, { Component } from 'react'

class NoteInputComponent extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Note:</label>
                        <input type="text" name="note" value={this.state.note} onChange={this.handleChange}/><br/>
                        
                </form>
            </div>
        )
    }
}

export default NoteInputComponent