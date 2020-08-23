import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { Spinner } from "react-bootstrap";
import CountUp from "react-countup";
import ComponentCSS from "./ComponentCSS.css";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div>
        <Spinner size="lg" animation="border" />
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3}>
          <CardContent className="infected">
            <Typography gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                duration={3}
                end={confirmed.value}
                separator={","}
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <CardContent className="recovered">
            <Typography gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                duration={5}
                end={recovered.value}
                separator={","}
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3}>
          <CardContent className="deaths">
            <Typography gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                duration={7}
                end={deaths.value}
                separator={","}
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
