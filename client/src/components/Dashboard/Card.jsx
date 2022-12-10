import React from "react";
import { useState } from "react";
import classes from "../Styles/Card.module.scss";
import Grid from "@mui/material/Grid";
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";
function Card({ number, name, expiry, cvc, focus }) {
  return (
    <Grid style={{ marginTop: "8vh" }}>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        // preview={false}
        // focused={focus}
      />
    </Grid>
  );
}

export default Card;
