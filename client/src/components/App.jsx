import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';
import AddTrip from './pages/AddTrip';
import TripDetails from './pages/TripDetails';
import Packages from './pages/Packages';
import AllPackages from './pages/AllPackages';
import AddPackage from './pages/AddPackage';
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
        <header className="App-header">
          <NavLink to="/" exact>Home</NavLink>
          {/* <NavLink to="/countries">Countries</NavLink> */}
          {/* <NavLink to="/add-country">Add country</NavLink> */}
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          <NavLink to="/profile">Profile</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/add-package' component={AddPackage} />
          <Route path='/packages' component={Packages} />
          <Route path='/allpackages' component={AllPackages} />
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