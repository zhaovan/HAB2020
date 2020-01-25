import React, { Component, Fragment } from "react";
import { Container, TextField } from "@material-ui/core";
import NavBar from "../components/ComponentBar";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container maxWidth="sm">
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Search for a class"
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
