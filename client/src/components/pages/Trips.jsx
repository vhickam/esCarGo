import React, { Component } from 'react';
import api from '../../api';
import {Link} from 'react-router-dom';

export default class Trips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: []
    }
  }

  showTrips() {
    let list = this.state.trips.map((trip) => {
      return (
        // <li key={trip._id}>
        //   <Link to={`/trip/${trip._id}`}> {trip.date.substring(0, 10)} </Link>
        // </li>
        <div className="col-md-3">
        <div className="card">
        <img className="card-img-top" src="./images/miamistart.png" alt="trip"></img>
        <div className="card-body">
          <h5 className="card-title">{trip.date.substring(0, 10)}</h5>
          <p className="card-text"> Start: {trip.start}
            <br /> End: {trip.end}
            <br /> Packages: {trip.packages.length}
          </p>
          <Link to={`/trip/${trip._id}`}> Details </Link>
        </div>
        </div>
        </div>


      )
    })
    return list;
  }

  

  render() {
    return (
      <div className="Trips">
        <h2>Your Upcoming Trips</h2>
        <div className="row">
        {this.showTrips()}
        </div>
        
      </div>
    );
  }
  componentDidMount() {
    api.getTrips()
      .then(trips => {
        //console.log(trips)
        this.setState({
          trips: trips
        })
      })
      .catch(err => console.log(err))
  }
}