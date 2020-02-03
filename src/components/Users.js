import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          { `${this.props.count} Users!`}
          {this.props.users.map(u => <li key={u.username}>{u.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ( ({users}) => ({ users, count: users.length}))

export default connect(mapStateToProps)(Users)
