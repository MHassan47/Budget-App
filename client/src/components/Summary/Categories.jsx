import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
function Categories() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllTransactions = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("/api/transactions/");

        setAllTransactions(response.data);
        setLoading(false);
        // console.log("---------", response);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTransactions();
  }, []);

  const categoryData = {};
  allTransactions.map((transaction) => {
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
