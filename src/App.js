import './App.css';
import Navbar from './Components/Navbar';
import './style.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import TeacherSearch from './Pages/TeacherSearch';
import React from 'react'
import TeacherSign from './Pages/TeacherSign'
function App() {

  
    

  return (
    <Router>
      
      <div className="app">
        
        <Navbar />
        <Switch>
          <Route path='/signasteacher'>
            <TeacherSign />
          </Route>
          <Route path='/teachers'>
            <TeacherSearch />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
