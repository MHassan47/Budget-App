import React from "react";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTransactions,
  reset,
} from "../../features/transactions/transactionSlice";
import axios from "axios";
import { transactionContext } from "../../provider/transactionProvider";
import { Grid } from "@mui/material";
function Categories() {
  const { transactions } = useSelector((state) => state.transactions);

  const categoryData = {};
  transactions?.map((transaction) => {
    if (transaction.type === "purchase")
      if (!categoryData[transaction.category]) {
        categoryData[transaction.category] = transaction.amount;
      } else {
        categoryData[transaction.category] += transaction.amount;
      }
  });

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {Object.keys(categoryData)
        .sort()
        .map((key) => {
          return (
            <Grid item xs={6}>
              <Grid
                style={{ fontSize: "1.6rem", color: "#9887bf" }}
                spacing={3}
              >
                {key}
              </Grid>
              <Grid
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                  color: "#33116d",
                }}
              >
                ${Math.round(categoryData[key] * 100) / 100}
              </Grid>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default Categories;
