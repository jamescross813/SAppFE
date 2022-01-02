import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponent";
import LoginContainer from "./containers/User/LoginContainer";
import UserPageContainer from "./containers/User/UserPageContainer";
import ProjectContainer from "./containers/Project/ProjectContainer"
import ToDoContainer from "./containers/ToDo/ToDoContainer"
import NoteContainer from "./containers/Note/NoteContainer"
import ToDoInputContainer from "./containers/ToDo/ToDoInputContainer"
import NoteInputContainer from "./containers/Note/NoteInputContainer"
import ProjectInputContainer from "./containers/Project/ProjectInputContainer"

function App() {
  return (
    <Router>
        <div className="App">
          <Route to exact path = "/" component={Homepage}/>
          <Route to exact path = "/login" component={LoginContainer} />
          <Route to exact path = "/user/" component={UserPageContainer} />
          <Route to exact path = "/user//projects" component={ProjectContainer}/>
          <Route to exact path = "/projects/" component={ProjectContainer}/>
          <Route to exact path = "projects//todo" component={ToDoContainer} />
          <Route to exact path = "projects//note" component={NoteContainer} />
          <Route to exact path = "project//todo/add" component={ToDoInputContainer} />
          <Route to exact path = "project//note/add" component={NoteInputContainer} />
          <Route to exact path = "/user//projects/add" component={ProjectInputContainer}/>
        </div>
      </Router>
      
  );
}


export default App;
