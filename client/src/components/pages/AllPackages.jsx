import React, { Component } from 'react';
import api from '../../api';
//import { userInfo } from 'os';
import {Link} from 'react-router-dom';

export default class AllPackages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allpackages: []
    }
  }

  componentDidMount() {
    api.getAllPackages()
      .then(allpackages => {
        console.log(allpackages)
        this.setState({
          allpackages: allpackages
        })
      })
      .catch(err => console.log(err))
  }


  showPackages() {
    let list = this.state.allpackages.map((p) => {
      return (
        <li key={p._id}>{p.name}  {<Link to={`/add-to-trip/${p._id}`}>Add</Link>}     </li>
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