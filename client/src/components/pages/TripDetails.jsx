import React, { Component } from 'react';
import api from '../../api';
import {Link} from 'react-router-dom';
import '../../index.scss';


export default class Trips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thetrip: '',
      pnum: '1'
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
          </tr>   
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
        <div className="trippackages">
        <table className = "table trippackagestable">
          <thead className="thead">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Pickup</th>
              <th scope="col">Dropoff</th>
              <th scope="col">Size</th>
            </tr>
            </thead>
            <tbody>
            {this.showthePackages()}
            </tbody>

          
          
        
        </table>
        </div>
       
        <br />
        <Link to={`/allpackages/${this.state.thetrip._id}`}>Add Packages to Trip</Link>
      </div>
    );
  }

}