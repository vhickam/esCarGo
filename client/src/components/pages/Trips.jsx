import React, { Component } from 'react';
import api from '../../api';

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
        <li key={trip._id}>{trip.date.substring(0, 10)}</li>
      )
    })
    return list;
  }

  

  render() {
    return (
      <div className="Trips">
        <h2>List of trips</h2>
        {this.showTrips()}
      </div>
    );
  }
  componentDidMount() {
    api.getTrips()
      .then(trips => {
        console.log(trips)
        this.setState({
          trips: trips
        })
      })
      .catch(err => console.log(err))
  }
}