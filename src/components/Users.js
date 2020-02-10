import React, { Component } from "react";
// add any needed imports here
import { connect } from "react-redux";
class Users extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          <br />
          {this.props.userCount} users <br />
          {this.props.users.map((user, index) => {
            return (
              <li key={index}>
                {user.username} from {user.hometown}
              </li>
            );
          })}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  console.log(state);
  return { users: state.users, userCount: state.users.length };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
