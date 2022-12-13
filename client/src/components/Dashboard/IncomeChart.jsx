import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// const gradient = ctx.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, "rgba(250,174,50,1)");
// gradient.addColorStop(1, "rgba(250,174,50,0)");

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Income",
      data: [33, 53, 85, 41, 44, 65, 23, 15, 34, 13],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      tension: 0.3,
    },
    {
      label: "Expenses",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#ff8789",
      tension: 0.3,
    },
  ],
};

function IncomeChart() {
  useEffect(() => {
    const getMonthlyIncome = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("/api/transactions/");

        // setAllTransactions(response.data);
        // setLoading(false);
        console.log("---------", response);
        const getData = await response.data.map((transaction) =>
          console.log(transaction.amount)
        );
      } catch (err) {
        console.log(err);
      }
    };
    getMonthlyIncome();
  }, []);

  return (
    <Grid container style={{ marginTop: "4vh" }}>
      <Line data={data} />
    </Grid>
  );
}

export default IncomeChart;
