import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
// import App from '../App'

class Users extends Component {

  render() {
    if (this.props.users.length > 0) {

      return (
        <div>
          <ul>
              {this.props.users.map( u => 
              <li>Username: {u.username}, {u.hometown}</li>)}
              <p>User Count: {this.props.users.length}</p>
          </ul>
        </div>
      )
    }
    else {
      return ""
    }

  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
