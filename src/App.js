import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./components/HomepageComponent";


function App() {
  return (
    <Router>
        <div className="App">
          <Route to exact path = "/" component={Homepage}/>
        </div>
      </Router>
      
  );
}


export default App;
