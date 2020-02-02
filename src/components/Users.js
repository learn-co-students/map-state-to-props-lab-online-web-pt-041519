import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
          {this.props.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, length: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
