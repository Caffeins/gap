import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const ClanBoard = props => {
  const {clan} = props;
  console.log({clan});

  return (
    <div>
      <Paper>
        <Box>{clan.name}</Box>
        <Box>{clan.founded_date}</Box>
        <Box>{clan.introduction}</Box>
        {/* <User_list/> */}
        <div>user_list</div>
        <Button variant="contained" color="primary">
          詳細
        </Button>
        <Button variant="contained" color="secondary">
          参加する
        </Button>
      </Paper>
    </div>
  );
};

export default ClanBoard;
