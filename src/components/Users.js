import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <p>Users!</p>
          {this.props.users.map( (user) => { return (<li>{user.username}</li>) })}
          Total users: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
    userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
