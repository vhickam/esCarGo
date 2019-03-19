import React, { Component } from 'react';
import api from '../../api';


export default class AddCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      start: "",
      end: "",
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
    console.log(this.state.name, this.state.description)
    let data = {
      date: this.state.date,
      start: this.state.start,
      end: this.state.end,
    }
    api.addTrip(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          date: "",
          start: "",
          end: "",
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
  render() {
    return (
      <div className="AddTrip">
        <h2>Add Trip</h2>
        <form>
          Date: <input type="date" value={this.state.date} name="date" onChange={this.handleInputChange} /> <br />
          Start Address: <input type="text" value={this.state.start} name="start" onChange={this.handleInputChange} /> <br />
          End Address: <input type="text" value={this.state.end} name="end" onChange={this.handleInputChange} /> <br />
          
          <button onClick={(e) => this.handleClick(e)}>Create Trip</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}