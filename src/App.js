import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponent";
import LoginContainer from "./containers/LoginContainer";


function App() {
  return (
    <Router>
        <div className="App">
          <Route to exact path = "/" component={Homepage}/>
          <Route to exact path = "login" component={LoginContainer} />
        </div>
      </Router>
      
  );
}


export default App;
