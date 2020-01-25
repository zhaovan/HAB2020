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

import MenuIcon from "@material-ui/icons/Menu";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                edge="start"
                // style={{marginRight: }}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6">Shopping Cart</Typography>
              <Button color="inherit">Add a review</Button>
            </Toolbar>
          </AppBar>
        </div>
        <Container maxWidth="sm">
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
