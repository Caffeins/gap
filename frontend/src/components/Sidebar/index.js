import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Drawer variant="permanent" anchor="left">
          <h1>Test</h1>
          <Divider />
          <List>
            <ListItem>
              <ListItemText primary={'HELLO'} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
