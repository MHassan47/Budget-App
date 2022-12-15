import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import ProgressBar from "./ProgressBar";
import Categories from "./Categories";
function Expenses() {
  const [currentExpenses, setCurrentExpenses] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getExpenses = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("/api/transactions/");
        let totalExpenses = 0;
        const getData = await response.data.map((transaction) => {
          if (transaction.amount < 0) {
            totalExpenses += transaction.amount;
          }
        });
        setCurrentExpenses(Math.abs(totalExpenses));
        setLoading(false);
        // console.log("---------", response);
      } catch (err) {
        console.log(err);
      }
    };
    getExpenses();
  }, []);

  return (
    <Grid container item md={12} display="row" justifyContent="space-around">
      {loading ? (
        <div>Loading</div>
      ) : (
        <Grid item md={4}>
          <ProgressBar currentExpenses={currentExpenses} />
        </Grid>
      )}
      <Grid item md={4}>
        <Categories />
      </Grid>
    </Grid>
  );
}

export default Expenses;
