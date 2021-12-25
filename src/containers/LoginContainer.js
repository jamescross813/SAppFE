import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'

class LoginFormContainer extends Component {

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
             <LoginComponent/>
         </div>
        );
      }
    
}
export default LoginFormContainer