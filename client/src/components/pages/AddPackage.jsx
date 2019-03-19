import React, { Component } from 'react';
import api from '../../api';


export default class AddPackage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      size: "",
      pickup: "",
      dropoff: '',
      duedate: '',
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    
    let data = {
      name: this.state.name,
      size: this.state.size,
      pickup: this.state.pickup,
      dropoff: this.state.dropoff,
      duedate: this.state.duedate
    }
    api.addPackage(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          size: "",
          pickup: "",
          dropoff: '',
          duedate: '',
          message: `Your package '${this.state.name}' has been created`
        })
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
      <div className="AddPackage">
        <h2>Add Package</h2>
        <form>
          Name (only you can see): <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} required/> <br />
          Pickup Address: <input type="text" value={this.state.pickup} name="pickup" onChange={this.handleInputChange} required /> <br />
          Dropoff Address: <input type="text" value={this.state.dropoff} name="dropoff" onChange={this.handleInputChange} required/> <br />
          Size: <select name="type" value={this.state.type} onChange={this.handleInputChange} required>
                  <option value='size'>Select Size</option>
                  <option value='xsmall'>X-Small</option>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
                  <option value='xlarge'>X-Large</option>
                </select>
                <br />
          Due Date: <input type="date" value={this.state.duedate} name="duedate" onChange={this.handleInputChange} required />  <br />
          
          <button onClick={(e) => this.handleClick(e)}>Create Package</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}