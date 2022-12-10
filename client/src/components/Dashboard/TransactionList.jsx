import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import classes from "../Styles/Transaction.module.scss";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function TransactionList() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllTransactions = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("/api/transactions/");
        console.log("TRANSACTION", response.data);
        setAllTransactions(response.data);
        setLoading(false);
        // console.log("---------", response);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTransactions();
  }, [loading]);

  console.log("niii", allTransactions);
  return (
    <Grid
      container
      item
      display="flex"
      direction="column"
      //   justifyContent="center"
      //   alignContent="center"
      style={{ fontSize: "1.2rem" }}
    >
      <Grid
        item
        justifyContent="center"
        alignContent="center"
        style={{ fontSize: "2.1rem", fontWeight: "700", color: "black" }}
        className={`${classes.transaction__header}`}
      >
        Payment History
      </Grid>
      {allTransactions.map((item) => (
        <Grid
          container
          direction="row"
          key={item.amount}
          className={`${classes.transaction__container}`}
        >
          <div className={`${classes.transaction__icon}`}>
            {item.type === "purchase" ? (
              <ShoppingBagOutlinedIcon
                style={{
                  fontSize: "10px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "100%",
                  backgroundColor: "#ff8789",
                  alignContent: "center",
                }}
              />
            ) : item.type === "refund" ? (
              <ReplyOutlinedIcon
                style={{
                  size: "10px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "100%",
                  backgroundColor: "#1ADD4D ",
                  alignContent: "center",
                }}
              />
            ) : (
              <AccountBalanceIcon
                style={{
                  fontSize: "15px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "100%",
                  backgroundColor: "white",
                  alignContent: "center",
                }}
              />
            )}
          </div>
          <div>
            <div className={`${classes.transaction__type}`}>{item.type}</div>
            <div className={`${classes.transaction__time}`}>
              {new Date(item.createdAt).toISOString().substring(0, 10)}
            </div>
          </div>
          <div className={`${classes.transaction__name}`}>{item.name}</div>
          <div
            style={{
              color: item.amount > 0 ? "green" : "red",
            }}
            className={`${classes.transaction__amount}`}
          >
            {item.amount}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default TransactionList;
