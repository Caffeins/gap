import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UserList from '../../components/pages/Board/UserIndex.js';
import Board from '../../components/pages/Board/ClanIndex.js';
import CreateClan from '../../components/pages/Board/Clan/CreateClan.js';
import CreateEvent from '../../components/pages/Events/CreateEvent.js';
import EventList from '../../components/pages/Events';
import UpdateProfile from '../../components/pages/MyUser/UpdateProfile.js';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

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
      <Router>
        <div>
          <Drawer variant="permanent" anchor="left">
            <List>
              <h1>Gather&Play</h1>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={this.state.user.image} />
                </ListItemAvatar>
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
              <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                <ListItem button>
                  <ListItemText primary={'ホーム'} />
                </ListItem>
              </Link>
              <Link
                to="/user/update"
                style={{textDecoration: 'none', color: 'black'}}>
                <ListItem button>
                  <ListItemText primary={'プロフィールを編集'} />
                </ListItem>
              </Link>
              <ListItem button>
                <ListItemText primary={'所属クラン'} />
              </ListItem>
              <Link
                to="/events"
                style={{textDecoration: 'none', color: 'black'}}>
                <ListItem button>
                  <ListItemText primary={'イベント一覧'} />
                </ListItem>
              </Link>
              <Link
                to="/follow"
                style={{textDecoration: 'none', color: 'black'}}>
                <ListItem button>
                  <ListItemText primary={'フォロー/フォロワー'} />
                </ListItem>
              </Link>
              <Link
                to="/clan/create"
                style={{textDecoration: 'none', color: 'black'}}>
                <ListItem button>
                  <ListItemText primary={'クランを作成'} />
                </ListItem>
              </Link>
              <Link
                to="/event/create"
                style={{textDecoration: 'none', color: 'black'}}>
                <ListItem button>
                  <ListItemText primary={'イベントを作成'} />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText primary={'ログアウト'} />
              </ListItem>
            </List>
          </Drawer>

          <Switch>
            <Route path="/event/create">
              <CreateEvent />
            </Route>
            <Route path="/clan/create">
              <CreateClan />
            </Route>
            <Route path="/user/update">
              <UpdateProfile />
            </Route>
            <Route path="/follow">
              <UserList />
            </Route>
            <Route path="/events">
              <EventList />
            </Route>
            <Route path="/">
              <Board />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Sidebar;
