import React, { Component } from 'react';
import api from '../../api';
import {Link} from 'react-router-dom';


export default class Trips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thetrip: ''
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

  showthePackages() {
   // console.log('this is it')
    //console.log(this.state.thetrip.packages)
    const thepackages = this.state.thetrip.packages;
    if(thepackages === undefined || thepackages.length === 0){
      return (
        <h3>No packages added</h3>
      )
    }
    else {
      
      let list = thepackages.map((p) => {
        return (
          <li key={p._id}>{p.name}</li>
        )
      })
    
      return list;
    }
  }

  

  render() {
    return (
      <div className="Trips">
        <h2>Trip Details</h2>
        Start: {this.state.thetrip.start} 
        <br />
        End: {this.state.thetrip.end}
        <br />
        {this.showthePackages()}
        <br />
        <Link to='/allpackages'>Add Packages to Trip</Link>
      </div>
    );
  }

}