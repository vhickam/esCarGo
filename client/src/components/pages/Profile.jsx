import React, { Component } from 'react';
import api from '../../api';
import { userInfo } from 'os';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secret: null,
      message: null
    }
  }

  getUserType(){
    if(api.getLocalStorageUser().type === 'driver'){
      return (
        <div>
          <Link to='/add-trip'>Add Trip</Link>
          <br />
          <Link to='/trips'>Trips</Link>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="Profile">
       <h1>{api.getLocalStorageUser().firstname}'s Profile</h1>

        {this.getUserType()}

      </div>
    );
  }
  // componentDidMount() {
  //   api.getSecret()
  //     .then(data => this.setState({ secret: data.secret }))
  //     .catch(err => this.setState({ message: err.toString() }))
  // }
}