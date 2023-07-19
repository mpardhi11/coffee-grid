import { Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import Content from "./Content";

const GridExample = () => {
  return (
    <Grid container direction={"column"} style={{ border: "1px solid green" }}>
      <Grid item style={{ border: "1px solid red" }}>
        <Header />
      </Grid>
      <Grid container item style={{ border: "1px solid blue" }}>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default GridExample;
