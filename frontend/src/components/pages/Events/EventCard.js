import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
        <Avatar src={event.image} />
        <CardHeader title={event.name} />
        <CardMedia image={event.image} />
        <CardContent>
          <Typography>
            <List>
              <ListItem>
                <ListItemText primary={event.introduction} />
              </ListItem>
              <ListItem>
                <ListItemText primary={event.place} />
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        {attending ? (
          <Button variant="contained" color="primary">
            参加する
          </Button>
        ) : (
          <Button variant="contained" color="secondary">
            参加しない
          </Button>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
