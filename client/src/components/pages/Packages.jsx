import React, { Component } from 'react';
import api from '../../api';

export default class Packages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      packages: []
    }
  }

  componentDidMount() {
    api.getPackages()
      .then(packages => {
        console.log(packages)
        this.setState({
          packages: packages
        })
      })
      .catch(err => console.log(err))
  }


  showPackages() {
    let list = this.state.packages.map((p) => {
      return (
        <li key={p._id}>{p.name}</li>
      )
    })
    return list;
  }

  

  render() {
    return (
      <div className="Packages">
        <h2>List of packages</h2>
        {this.showPackages()}
      </div>
    );
  }
  
}