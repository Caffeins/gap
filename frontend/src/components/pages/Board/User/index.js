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

const UserCard = props => {
  const classes = useStyles();
  const {user} = props;
  let following = true;
  return (
    <div>
      <Card className={classes.card}>
        <Avatar src={user.image} />
        <CardHeader title={user.name} subheader={user.date_of_birth} />
        <CardMedia image={user.image} />
        <CardContent>
          <Typography>
            <List>
              <ListItem>
                <ListItemText primary={user.introduction} />
              </ListItem>
              <ListItem>
                <ListItemText primary={user.place} />
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        {following ? (
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              フォローする
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button size="small" variant="contained" color="secondary">
              フォローを外す
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default UserCard;
