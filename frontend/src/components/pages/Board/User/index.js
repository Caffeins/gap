import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class UserBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let following = true;

    return (
      <div>
        <Paper className={classes.root}>
          <div>icon</div>
          <Box>名前</Box>
          <Box>場所</Box>
          {/* <hobby_list> */}
          <div>user_list</div>
          {following ? (
            <Button variant="contained" color="primary">
              フォローする
            </Button>
          ) : (
            <Button variant="contained" color="secondary">
              フォローを外す
            </Button>
          )}
        </Paper>
      </div>
    );
  }
}
