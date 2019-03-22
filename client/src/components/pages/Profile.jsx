import React, { Component } from 'react';
import api from '../../api';
//import { userInfo } from 'os';
import {Link} from 'react-router-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secret: null,
      message: null,
      trips: [],
      packages: []
    }
  }

  componentDidMount() {
    if(api.getLocalStorageUser().type === 'driver'){
    api.getTrips()
      .then(trips => {
        //console.log(trips)
        this.setState({
          trips: trips
        })
      })
      .catch(err => console.log(err))
      }
    
    else{
      api.getPackages()
      .then(packages => {
        console.log(packages)
        this.setState({
          packages: packages
        })
      })
      .catch(err => console.log(err))
    }
}


  getUserType(){
    if(api.getLocalStorageUser().type === 'driver'){
      return (
        // <div>
        //   <Link to='/add-trip'>Add Trip</Link>
        //   <br />
        //   <Link to='/trips'>Trips</Link>
        // </div>

        <div className="Trips">
        <img src="/images/snail.png" alt="snail" width="150" height="auto"></img>
          <h2>Your Upcoming Trips</h2>
          <button><Link to='/add-trip'>Add Trip</Link></button>
         
          <div className="container trips-container">
          <div className="row justify-content-center">
          {this.showTrips()}
          </div>
        </div> 
        
        </div>

      )
    }

    else return (
      // <div>
      //     <Link to='/add-package'>Add Package</Link>
      //     <br />
      //     <Link to='/packages'>Packages</Link>
      //   </div>

      <div className="Packages">
       <img src="/images/snail.png" alt="snail" width="150" height="auto"></img>
        <h2>Your Packages</h2>
        <button><Link to='/add-package'>Add Package</Link></button>
        {/* {this.showPackages()} */}


        <div className="trippackages">
        <table className = "table trippackagestable">
          <thead className="thead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Pickup</th>
              <th scope="col">Dropoff</th>
              <th scope="col">Size</th>
              <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {this.showPackages()}
            </tbody>

          
          
        
        </table>
        </div>

      </div>
    )
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
          <br />
          <button>GO</button>
        </div>
        </div>
        </div>


      )
    })
    return list;
  }

  showPackages() {
    let list = this.state.packages.map((p) => {
      return (
        // <li key={p._id}>{p.name}</li>

        <tr>
            <th scope="row">{p.name}</th>
            <td>{p.pickup}</td>
            <td>{p.dropoff}</td>
            <td>{p.size}</td>
            <td><button onClick={(e) => this.handleClick(e, p)}>Delete</button></td>
          </tr>  
      )
    })
    return list;
  }




  render() {
    return (
      <div className="Profile">
       {/* <h1>{api.getLocalStorageUser().firstname}'s Profile</h1> */}
      
        {this.getUserType()}

      </div>
    );
  }

}