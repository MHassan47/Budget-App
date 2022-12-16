import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTransactions,
  reset,
} from "../../features/transactions/transactionSlice";

import Grid from "@mui/material/Grid";
import ProgressBar from "./ProgressBar";
import Categories from "./Categories";

function Expenses() {
  const { transactions, isLoading } = useSelector(
    (state) => state.transactions
  );
  const dispatch = useDispatch();
  const [currentExpenses, setCurrentExpenses] = useState();

  useEffect(() => {
    let totalExpenses = 0;
    const getData = transactions.map((transaction) => {
      if (transaction.amount < 0) {
        totalExpenses += transaction.amount;
      }
    });
    setCurrentExpenses(Math.abs(totalExpenses));
  }, [transactions]);

  return (
    <Grid container item md={12} display="row" justifyContent="space-around">
      <Grid item md={4}>
        <ProgressBar currentExpenses={currentExpenses} />
      </Grid>

      <Grid item md={4}>
        <Categories />
      </Grid>
    </Grid>
  );
}

export default Expenses;
