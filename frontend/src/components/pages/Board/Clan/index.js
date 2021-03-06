import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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

const ClanBoard = props => {
  const classes = useStyles();
  const {clan} = props;
  console.log({clan});

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title={clan.name} subheader={clan.founded_date} />
        {(() => {
          if (clan.image) {
            return (
              <CardMedia
                style={{height: 0, paddingTop: '56.25%'}}
                image={clan.image}
              />
            );
          } else {
            return;
          }
        })()}
        <CardContent>{clan.introduction}</CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">
            詳細
          </Button>
          <Button size="small" variant="contained" color="secondary">
            参加する
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ClanBoard;
