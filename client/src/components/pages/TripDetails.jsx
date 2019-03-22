import React, { Component } from 'react';
import api from '../../api';
import {Link} from 'react-router-dom';
import '../../index.scss';


export default class Trips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thetrip: '',
      message: ''
    }
  }


  componentDidMount() {
    api.getTheTrip()
      .then(thetrip => {
        this.setState({
          thetrip: thetrip[0]
        })
      })
      .catch(err => console.log(err))
  }

  showthePackages(trip) {
   // console.log('this is it')
    //console.log(this.state.thetrip.packages)
    const thepackages = trip.packages;
    console.log(thepackages)
   
    if(thepackages === undefined || thepackages.length === 0){
      return (
        <tr>
          <td>No Packages Added</td></tr>
      )
    }
    else {
      
      let list = thepackages.map((p, i) => {
        return (
          //<li key={p._id}>{p.name}</li>
          <tr>
            <th scope="row">{i+1}</th>
            <td>{p.pickup}</td>
            <td>{p.dropoff}</td>
            <td>{p.size}</td>
            <td><button>Remove</button></td>
          </tr>   
        )
      })
    
      return list;
    }
  }


  handleClick(e, trip) {
    e.preventDefault()
    //this.setState({packageID: pid})
    let data = {
      tripID: trip
    }
   // console.log(this.props.match.params.tid)
    //debugger
    api.deleteTrip(data)
      .then(result => {
        console.log('SUCCESS!')
        // this.setState({
        //   packageID: "",
        //   message: `Package has been added`
        // })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  

  render() {
    return (
      <div className="Trips">
      <img src="/images/snail.png" alt="snail" width="150" height="auto"></img>
        <h2>Trip Details</h2>
        <div className="row">
        <div className="col-6">
        Start: {this.state.thetrip.start} 
        </div>
        <div className="col-6">
        End: {this.state.thetrip.end}
        </div>
        </div>
       
        <br />
       
        <br />
        <div className="trippackages">
        <table className = "table trippackagestable">
          <thead className="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Pickup</th>
              <th scope="col">Dropoff</th>
              <th scope="col">Size</th>
              <th scope="col">Remove</th>
            </tr>
            </thead>
            <tbody>
            {this.showthePackages(this.state.thetrip)}
            </tbody>

          
          
        
        </table>
        </div>
       
        <br />
        <button><Link to={`/allpackages/${this.state.thetrip._id}`}>Add Packages to Trip</Link></button>
        <br/> <br/>
        {/* <Link to={`/delete-trip/${this.state.thetrip._id}`}>Delete Trip</Link> */}
        <button onClick={(e) => this.handleClick(e, this.state.thetrip._id)}>Delete Trip</button>
      </div>
    );
  }

}