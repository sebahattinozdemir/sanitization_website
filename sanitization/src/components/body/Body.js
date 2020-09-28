import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Body.css";
import Slider from "./slider/Slider";
import Card from "./cards/Card";
function Body() {
  return (
    <div>
      <Grid container spacing={3}>
        <div className="container">
          <Grid item xs={12} className="slider mt-4">
            <Slider />
          </Grid>
        </div>
        
        <div className="row">
          <Card />
        </div>
      </Grid>
    </div>
  );
}

export default Body;
