import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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
        <CardMedia image={clan.image} />
        <CardContent>{clan.introduction}</CardContent>
        <Button variant="contained" color="primary">
          詳細
        </Button>
        <Button variant="contained" color="secondary">
          参加する
        </Button>
      </Card>
    </div>
  );
};

export default ClanBoard;
