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
              <ListItemText primary={`場所：${this.state.user.place}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`趣味：${this.state.user.hobby}`} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary={'プロフィールを編集'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'所属クラン'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'参加しているイベント'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'フォロワー/フォロワー'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'クランを作成'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'イベントを作成'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'フォローする/はずす'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary={'ログアウト'} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
