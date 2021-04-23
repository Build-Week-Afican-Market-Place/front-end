import React, { useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// ashley
import UserForms from './Components/UserForms'

// already merged with main
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'



function App() {

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/login'>Log-In</Link>
        <Link to='/login/newuser'>Sign-Up</Link>
        <Link to='/shop'>Market Place</Link>
      </nav>
      <Switch>
        {/* <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/about'>
          <About />
        </Route> */}
        <Route path='/login'>
          <UserForms />
        </Route>
        {/* <Route path='/shop'>
          <Shop />
        </Route> */}
        <PrivateRoute path='profile'>
          <Profile />
        </PrivateRoute>
      </Switch>

    </div>
  );
}

export default App;
