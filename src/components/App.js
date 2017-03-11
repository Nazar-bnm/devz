import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to='/'>About us</Link></li>
          <li><Link to='/technologies'>Technologies</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/team'>Team</Link></li>
          <li><Link to='/customers'>Customers</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
