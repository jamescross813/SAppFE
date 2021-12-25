import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          
         </div>
        );
      }
    
}
export default LoginFormContainer