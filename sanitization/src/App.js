import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} className="footer2 p-4">
          <Navbar />
        </Grid>

        <Grid item xs={12} className="footer2 p-4">
        <Body />
        </Grid>

        <Grid item xs={12}>
        <Footer />
        </Grid>
        
        
      </Grid>
    </div>
  );
}

export default App;
