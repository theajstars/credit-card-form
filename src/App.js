import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Desktops from './Components/Desktops';
import Mobile from './Components/Mobile';
import './Assets/CSS/App.css'


function App() {
  
  return (
    <>
      <Router>
        <Route exact path="/" component={Mobile}/>
        <Route exact path="/desktops" component={Desktops}/>
      </Router>
    </>
  );
}

export default App;
