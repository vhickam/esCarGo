import React, { Component } from 'react';
import api from '../../api';


export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      address: '',
      city: '',
      usstate: '',
      zip: '',
      type: 'driver',
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
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
      city: this.state.city,
      usstate: this.state.usstate,
      zip: this.state.zip,
      type: this.state.type  
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
      <div className="container login-form-container">
        <h2>Signup</h2>
        <form className='form-signin login-form'>
            Email
            <input type="email" value={this.state.username} name="username" onChange={this.handleInputChange} required autoFocus /> 
           <br />
          
            Password
            <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} required /> 
            <br />

            First Name
            <input type="text" value={this.state.firstname} name="firstname" onChange={this.handleInputChange} required />
            <br />

            Last Name
            <input type="text" value={this.state.lastname} name="lastname" onChange={this.handleInputChange} required />  
            <br />

            Address
            <input type="text" value={this.state.address} name="address" onChange={this.handleInputChange} required /> 
            <br />

            City
            <input type="text" value={this.state.city} name="city" onChange={this.handleInputChange} required />  
            <br />

            State
            <input type="text" placeholder='FL' value={this.state.usstate} name="usstate" onChange={this.handleInputChange} required /> 
            <br />

            ZIP
            <input type="text" value={this.state.zip} name="zip" onChange={this.handleInputChange} required /> 
            <br />

            TYPE
            <select name="type" value={this.state.type} onChange={this.handleInputChange} required>
            <option value='driver'>Driver</option>
            <option value='shipper'>Shipper</option>
            </select>
            <br />
          
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
      </div>
    );
  }
}