import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ClassCard from "./ClassCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ClassCard
            className={classes.paper}
            classCode="1470"
            name="Deep Learning"
          />
        </Grid>
        <Grid item xs={6}>
          <ClassCard
            className={classes.paper}
            classCode="1430"
            name="Computer Vision"
          />
        </Grid>
      </Grid>
    </div>
  );
}
