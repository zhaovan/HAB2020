import React, { Component, Fragment } from "react";
import {
  Container,
  TextField,
  Checkbox,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  CardContent
} from "@material-ui/core";
import ComponentBar from "../components/ComponentBar";

import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";

import ReviewCard from "../components/ReviewCard";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <ComponentBar />

        <Container maxWidth="sm">
          {/*Class Name*/}
          <Typography variant="h4">CSCI 1430</Typography>
          {/*Shopped*/}
          <Typography variant="h7">Shopped: 5</Typography>

          {/*Took*/}
          <Typography variant="h7">Took</Typography>
        </Container>

        {/* <Container maxWidth="sm">
            <Card>
                <CardContent>
                <Typography gutterBottom> Grade Option: ...</Typography>
                <Typography variant="h7">Rating: ...</Typography>
                <Typography variant="h7">Review1</Typography> 
                </CardContent>
            </Card>
        </Container> */}
        <Container>
          <Card>
            <ReviewCard></ReviewCard>
          </Card>
        </Container>
      </Fragment>
    );
  }
}

export default HomePage;
