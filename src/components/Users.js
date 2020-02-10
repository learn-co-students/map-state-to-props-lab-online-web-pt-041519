import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        <ul>
          Users!
          {this.props.userCount}
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    //debugger;
    return {
        users: state.users,
        userCount: state.users.length
    }
}
// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);