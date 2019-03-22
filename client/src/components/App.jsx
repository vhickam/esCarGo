//AIzaSyAFnt4FO4StD3LpFa2W79ffdzc-FuJ7Jb8


import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';
import AddTrip from './pages/AddTrip';
import TripDetails from './pages/TripDetails';
import Packages from './pages/Packages';
import AllPackages from './pages/AllPackages';
import AddPackage from './pages/AddPackage';
//import AddPtoTrip from './pages/AddPtoTrip';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import api from '../api';
import logo from '../logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header navbar navbar-expand-lg">
          <NavLink to="#" className="navbar-brand">  <img src="images/snail.png" width="50" height="50" className="d-inline-block align-top" alt=""></img>
          </NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>  

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
              {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
              </li>
              <li className="nav-item">
              {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
              </li>
              <li className="nav-item">
              {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
              </li>
              <li className="nav-item">
              <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>

          {/* <NavLink to="/" exact>Home</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          <NavLink to="/profile">Profile</NavLink> */}
        </header>
        
        
        
        
        
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/add-package' component={AddPackage} />
          <Route path='/packages' component={Packages} />
          <Route path='/allpackages/:tid' component={AllPackages} />
          {/* <Route path='/add-to-trip/:pid' component={AddPtoTrip} /> */}
          <Route path='/add-trip' component={AddTrip} />
          <Route path='/trips' component={Trips} />
          <Route path='/trip/:id' component={TripDetails}></Route>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}