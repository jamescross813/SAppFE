import React, { Component } from 'react';

class LoginComponent extends Component{

    state = {
        username: "",
        password: ""
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <label>Username</label><br/>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
              <label>Password</label><br/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
                <input type="submit" />
          </form>
        )
    }
}

export default LoginComponent