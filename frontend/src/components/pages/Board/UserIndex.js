import React, {Component} from 'react';
import axios from 'axios';
import UserCard from '../Board/User';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/account_api/users/').then(response => {
      this.setState({
        users: response.data,
      });
    });
  }

  render() {
    const {users} = this.state;
    return (
      <div>
        {users.map(user => (
          <UserCard user={user} />
        ))}
      </div>
    );
  }
}

export default UserList;
