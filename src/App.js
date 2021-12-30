import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponent";
import LoginContainer from "./containers/LoginContainer";
import UserPageContainer from "./containers/UserPageContainer";


function App() {
  return (
    <Router>
        <div className="App">
          <Route to exact path = "/" component={Homepage}/>
          <Route to exact path = "/login" component={LoginContainer} />
          <Route to exact path = "/user" component={UserPageContainer} />
        </div>
      </Router>
      
  );
}


export default App;
