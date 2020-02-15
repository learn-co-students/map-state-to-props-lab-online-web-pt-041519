import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  renderUsers = () => (
    this.props.users.map(user => (
      <li>
        <h3>{user.username}</h3>
        <h4>{user.hometown}</h4>
      </li>
    ))
  )
  render() {
    return (
      <div>
        {`${this.props.count} users:`}
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (({ users }) => ({ users, count: users.length }))

export default connect(mapStateToProps)(Users)
