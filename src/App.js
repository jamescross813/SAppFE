import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./components/homepage/Homepage";


function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <UsersContainer />
          <Route to exact path = "/" component={Homepage}/>
          
        </div>
      </Router>
      
  );
}


export default App;
