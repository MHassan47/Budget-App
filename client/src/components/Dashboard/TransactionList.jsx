import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import classes from "../Styles/Transaction.module.scss";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTransaction } from "../../features/transactions/transactionSlice";

function TransactionList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [transactionsPreview, setTransactionsPreview] = useState([]);
  const { transactions, isLoading } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        const response = await axios.get("/api/transactions/preview");

        setTransactionsPreview(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTransactions();
  }, [transactions]);

  const handleDelete = (id) => {
    console.log(id);
    console.log(`test ${id}`);
    dispatch(deleteTransaction(id));
  };

  // const handleEdit = async () => {};

  return (
    <Grid
      container
      item
      display="flex"
      direction="column"
      style={{ fontSize: "1.2rem" }}
    >
      <Grid container display="flex" justifyContent="space-around">
        <Grid
          item
          justifyContent="center"
          alignContent="center"
          style={{ fontSize: "2.1rem", fontWeight: "700", color: "black" }}
          className={`${classes.transaction__header}`}
        >
          Payment History
        </Grid>
        <Grid item justifyContent="flex-end">
          <a href="/transaction">see all</a>
        </Grid>
      </Grid>
      {transactionsPreview.map((item) => (
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          key={item.amount}
          className={`${classes.transaction__container}`}
        >
          <div className={`${classes.transaction__icon}`}>
            {item.type === "purchase" ? (
              <ShoppingBagOutlinedIcon
                style={{
                  fontSize: "10px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "20%",
                  backgroundColor: "white",
                  color: "#3a2261",
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
                  backgroundColor: "rgba(75,192,192,1) ",
                  alignContent: "center",
                }}
              />
            ) : (
              <AccountBalanceIcon
                style={{
                  fontSize: "10px",
                  width: "38px",
                  height: "38px",
                  color: "#3a2261",
                  borderRadius: "20%",
                  backgroundColor: "white",
                  alignContent: "center",
                }}
              />
            )}
          </div>
          <div>
            <div className={`${classes.transaction__name}`}>{item.name}</div>
            <div className={`${classes.transaction__time}`}>
              {moment(new Date(item.createdAt)).fromNow()}
            </div>
          </div>

          <div
            style={{
              color: item.amount > 0 ? "rgba(75,192,192,1)" : "#ff8789",
            }}
            className={`${classes.transaction__amount}`}
          >
            ${item.amount}
          </div>
          <div className={`${classes.item_icons}`}>
            <DeleteOutlineIcon onClick={() => handleDelete(item._id)} />
            {/* <EditIcon onClick={handleEdit} /> */}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default TransactionList;
