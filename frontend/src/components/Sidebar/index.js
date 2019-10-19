import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/account_api/users/1/').then(response => {
      this.setState({
        user: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Drawer variant="permanent" anchor="left">
          <List>
            <ListItem>
              <Avatar src={this.state.user.image} />
              <ListItemText primary={this.state.user.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`場所:${this.state.user.place}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`趣味:${this.state.user.hobby}`} />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
