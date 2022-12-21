import React from "react";
import Grid from "@mui/material/Grid";
import classes from "../Styles/RightSidebar.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import TransactionList from "../Dashboard/TransactionList";
import Card from "../Dashboard/Card";
import TransactionForm from "../Dashboard/TransactionForm";
import AddCard from "./AddCard";
import { Avatar } from "@mui/material";

function RightSideBar() {
  const { user } = useSelector((state) => state.auth);

  const [primaryCard, setPrimarCard] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrimaryCard = async () => {
      try {
        const response = await axios.get("/api/cards/primary");

        setPrimarCard(...response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPrimaryCard();
  }, []);

  return (
    <Grid
      display="flex"
      container
      alignContent="space-between"
      justifyContent="center"
      item
      md={12}
      direction="row"
      height="100vh"
      style={{
        backgroundColor: "#f6f7ff",
        borderLeft: "3px solid #babdd5",
        paddingLeft: "1rem",
      }}
    >
      <Grid
        container
        direction="row"
        alignContent="center"
        justifyContent="flex-end"
        className={`${classes.profile_container}`}
        item
      >
        {user?.firstName} {user?.lastName}
        <Avatar
          style={{ height: "3rem", width: "3rem" }}
          className={`${classes.pfp}`}
          src={user.profilePicture}
          alt="pfp"
        />
      </Grid>

      {!loading && primaryCard ? (
        <Card
          number={primaryCard.number}
          name={primaryCard.name}
          expiry={primaryCard.expiry}
          cvc={primaryCard.cvc}
          // preview={false}
        />
      ) : (
        <AddCard />
      )}
      {/* </Grid> */}
      <TransactionList />
      <TransactionForm />
    </Grid>
  );
}

export default RightSideBar;
