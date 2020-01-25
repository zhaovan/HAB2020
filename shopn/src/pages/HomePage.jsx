import React, { Component, Fragment } from "react";
import {
  Container,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";

import { MenuIcon } from "@material-ui/icons";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth="sm">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">News</Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <TextField
            id="outlined-full-width"
            // label="Search for a class!"
            style={{ margin: 8 }}
            placeholder="Search for a class"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Container>
      </Fragment>
    );
  }
}

export default HomePage;
