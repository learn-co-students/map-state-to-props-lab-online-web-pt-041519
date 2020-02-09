import React, { Component } from 'react';
// add any needed imports here

import { connect } from 'react-redux'

class Users extends Component {

  render() {

    // an array with all users mapped to it - remember that each list item needs an individual key
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          
          {/* display the user names - we assigned them to 'users' */}
          {users}

          {/* display the user count */}
          <p>{this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // return an object with users and user count - this has direct access to the current state 
  return {users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
