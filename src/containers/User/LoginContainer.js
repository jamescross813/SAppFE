import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'

class LoginContainer extends Component {

    handleLogin = (userInfo)=>{
        let loginInfo = {
            user: {
              username: userInfo.username,
              password: userInfo.password,
            },
          }
    }

    render() {  
        return (
         <div>
             <LoginComponent handleLogin={this.handleLogin}/>
         </div>
        );
      }
    
}
export default LoginContainer