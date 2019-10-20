import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const EventCard = props => {
  const classes = useStyles();
  const {event} = props;
  let attending = true;
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title={event.name} />
        <CardMedia image={event.image} />
        <CardContent>
          <Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={event.image} />
                </ListItemAvatar>
                <ListItemText primary={event.leader} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`定員：${event.member_capacity} 人`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={event.introduction} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`開催場所：${event.address}`} />
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        {attending ? (
          <CardActions>
            <Button variant="contained" size="small" color="primary">
              参加する
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button variant="contained" color="secondary">
              参加しない
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
