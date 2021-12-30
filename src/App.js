import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponent";
import LoginContainer from "./containers/LoginContainer";
import UserPageContainer from "./containers/UserPageContainer";
import ProjectContainer from "./containers/ProjectContainer"
import ToDoContainer from "./containers/ToDoContainer"
import NoteContainer from "./containers/NoteContainer"

function App() {
  return (
    <Router>
        <div className="App">
          <Route to exact path = "/" component={Homepage}/>
          <Route to exact path = "/login" component={LoginContainer} />
          <Route to exact path = "/user/" component={UserPageContainer} />
          <Route to exact path = "/user//projects" component={ProjectContainer}/>
          <Route to exact path = "/user//project//todo" component={ToDoContainer} />
          <Route to exact path = "projects//note" component={NoteContainer} />
        </div>
      </Router>
      
  );
}


export default App;
