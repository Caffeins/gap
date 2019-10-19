import React, {Component} from 'react';
import axios from 'axios';
import EventCard from './EventCard.js';

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/event_api/event/').then(response => {
      this.setState({
        events: response.data,
      });
    });
  }

  render() {
    const {events} = this.state;
    return (
      <div>
        {events.map(event => (
          <EventCard event={event} />
        ))}
      </div>
    );
  }
}

export default EventList;
