import React, { Component } from 'react';
import api from '../../api';
//import { userInfo } from 'os';
import {Link} from 'react-router-dom';

export default class AllPackages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allpackages: [],
      packageID: ''
    }
  }

  componentDidMount() {
    api.getAllPackages()
      .then(allpackages => {
        //console.log(allpackages)
        this.setState({
          allpackages: allpackages
        })
      })
      .catch(err => console.log(err))
  }



  handleClick(e, pid) {
    e.preventDefault()
    this.setState({packageID: pid})
    let data = {
      packageID: this.state.packageID,
    }
    api.addPtoTrip(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          packageID: "",
          message: `Your trip on '${this.state.date}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  
  showPackages() {
    let list = this.state.allpackages.map((p) => {
      return (
        <li key={p._id}>{p.name}  <button onClick={(e) => this.handleClick(e, p._id)}>Add</button>    </li>       //{<Link to={`/add-to-trip/${p._id}`}>Add</Link>} 
      )
    })
    return list;
  }

  

  render() {
    return (
      <div className="AllPackages">
        <h2>List of packages</h2>
        {this.showPackages()}
      </div>
    );
  }
  
}