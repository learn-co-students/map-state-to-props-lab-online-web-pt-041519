import React, { Component } from 'react';
import { connect } from 'react-redux';
// import App from '../App.js'
class Users extends Component {

  render() {
    // console.log(this.props.users)
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          {this.props.users.length} 
          <br></br>
          {/* In addition, display the total number of users curently in the store */}
          Usernames: 
          {users}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
    }
}


export default connect(mapStateToProps)(Users)
