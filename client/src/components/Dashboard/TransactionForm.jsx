import React, { useContext } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "../Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  createTransactions,
  reset,
} from "../../features/transactions/transactionSlice";
import { useNavigate } from "react-router-dom";
import classes from "../Styles/Transaction.module.scss";
import ScaleLoader from "react-spinners/ScaleLoader";
function TransactionForm() {
  const { transactions, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.transactions
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  console.log(type);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let value = Number(amount);
    if (!type || !category || !name || !amount) {
      setError("Field(s) cannot be empty!");
    }

    if (type === "purchase" && Number(amount) > 0) {
      console.log(true);
      setAmount(-Math.abs(amount));
    }
    const body = { type, category, name, amount };
    console.log({ amount });
    dispatch(createTransactions(body));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setType("");
    setCategory("");
    setName("");
    setAmount("");
  };

  return (
    <Grid
      container
      md={11}
      justifyContent="center"
      direction="column"
      style={{
        // border: "1px solid black",
        backgroundColor: "rgba(255,255,255,0.7)",
        boxShadow: "5px 5px 18px rgba(60, 64, 67, 0.1)",
        borderRadius: "30px",
        padding: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      <Grid
        item
        style={{
          fontSize: "1.7rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#290c64",
        }}
      >
        Quick Transaction
      </Grid>

      <Grid container item md={4} direction="column">
        <form className={`${classes.transaction_form}`}>
          <Grid item display="flex" direction="row">
            <select name="Type" value={type} onChange={handleTypeChange}>
              <option value="" disabled>
                Transaction Type
              </option>
              <option value="purchase">Purchase</option>
              <option value="income">Income</option>
            </select>

            {type === "income" ? (
              <select
                name="Category"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="primary">Primary Income</option>
                <option value="investment">Investment</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <select
                name="Category"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="Bills">Bills</option>
                <option value="Food">Food</option>
                <option value="Household">Household</option>
                <option value="Entertainment">Entertainment</option>
                <option value="VehicleCosts">Vehicle Costs</option>
                <option value="Other">Other</option>
              </select>
            )}
          </Grid>
          {/* <input
            type="text"
            name="type"
            placeholder="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          /> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Add amount"
            value={amount}
            onChange={(e) => {
              type === "purchase"
                ? setAmount(-Math.abs(e.target.value))
                : setAmount(e.target.value);
            }}
          />

          <Button
            text={
              loading ? (
                <ScaleLoader
                  color="#ffff"
                  loading={loading}
                  size={90}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "COMPLETE"
              )
            }
            onClick={handleSubmit}
            propClassName={"main__btn"}
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default TransactionForm;
