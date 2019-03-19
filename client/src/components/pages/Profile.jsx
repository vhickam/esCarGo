import React, { Component } from 'react';
import api from '../../api';
//import { userInfo } from 'os';
import {Link} from 'react-router-dom';

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

    else return (
      <div>
          <Link to='/add-package'>Add Package</Link>
          <br />
          <Link to='/packages'>Packages</Link>
        </div>
    )
  }
  render() {
    return (
      <div className="Profile">
       <h1>{api.getLocalStorageUser().firstname}'s Profile</h1>
      
        {this.getUserType()}

      </div>
    );
  }

}