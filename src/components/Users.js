import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li key={user.username + user.hometown}> {user.username}</li>)}
         
        </ul>
          Total Users: {this.props.userCount}
      </div>
    )
  }
}

const mapStateToProps  = (state) => {
  return { 
    users: state.users, 
    userCount: state.users.length 
  }
}


export default connect(mapStateToProps)(Users)
