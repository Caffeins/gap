import React, {Component} from 'react';
import axios from 'axios';
import ClanBoard from '../Board/Clan';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      clans: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/clan_api/clans/').then(response => {
      this.setState({
        clans: response.data,
      });
    });
  }

  render() {
    const {clans} = this.state;
    return (
      <div>
        {clans.map(clan => (
          <ClanBoard clan={clan} />
        ))}
      </div>
    );
  }
}

export default Board;
