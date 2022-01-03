import { Component } from "react";
import NavBar from "../NavBar/NavBarComponent";
import LoginContainer from "../../containers/User/LoginContainer";

class Homepage extends Component{

    render(){
        return(
            <div>
                <NavBar />
                <LoginContainer />
                <h1>SApp</h1>
                    <h4>About us</h4>
                        <p>This app was created by a desperate man who was tired of losing posit notes with app ideas, to do lists and notes thought up in the middle of nowhere. A man who was sure there was a better way. A man who realised that until this app was up and running he'd just created the need for yet more posit notes....</p>
            </div>
        )
    }
}

export default Homepage