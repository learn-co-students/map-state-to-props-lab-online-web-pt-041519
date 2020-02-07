import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';

class Users extends Component {

  // listUsers = () => {
  //   const list = []
  //   for(let ea of this.props.users) {
  //     list.push(`<li>${ea.username}, from ${ea.hometown}</li>`)
  //   }
  //   return list;
  // }

  render() {
    // debugger;
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( p => { return <li>{p.username} from {p.hometown}</li> }) }
          <p>Number of Users: {this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { users: [...state.users] }
}

export default connect(mapStateToProps)(Users)
