import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupComponent from '../../components/User/SignupComponent'

class SignupContainer extends Component {

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
             <SignupComponent handleLogin={this.handleLogin}/>
         </div>
        );
      }
    
}
export default SignupContainer