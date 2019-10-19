import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class ClanBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Paper>
          <Box>タイトル</Box>
          <Box>説明</Box>
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
  }
}

export default ClanBoard;
