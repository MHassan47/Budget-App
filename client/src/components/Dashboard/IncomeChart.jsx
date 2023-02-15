import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
import { useState } from "react";

function IncomeChart() {
  const { transactions } = useSelector((state) => state.transactions);

  const [monthlyExpenses, setMonthlyExpenses] = useState([]);
  useEffect(() => {
    const getMonthlyIncome = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("/api/transactions/monthly");

        setMonthlyExpenses(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMonthlyIncome();
  }, [transactions]);

  const expensesData = {};
  const incomeData = {};
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  monthlyExpenses.map((month) => {
    if (month._id.type === "purchase") {
      monthArray.map((item, i) => {
        if (i === month._id.month - 1) {
          expensesData[item] = -month.amount;
        } else {
          if (expensesData[item] === undefined) expensesData[item] = 0;
        }
      });
    } else {
      monthArray.map((item, i) => {
        if (i === month._id.month - 1) {
          incomeData[item] = month.amount;
        } else {
          if (incomeData[item] === undefined) incomeData[item] = 0;
        }
      });
    }
  });

  const data = {
    datasets: [
      {
        label: "Income",
        data: incomeData,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
      {
        label: "Expenses",
        data: expensesData,
        fill: false,
        borderColor: "#ff8789",
        tension: 0.3,
      },
    ],
  };

  return (
    <Grid container style={{ marginTop: "4vh" }}>
      <Line data={data} />
    </Grid>
  );
}

export default IncomeChart;
