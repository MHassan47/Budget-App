import React from "react";
import Grid from "@mui/material/Grid";
import classes from "../Styles/RightSidebar.module.scss";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { userContext } from "../../provider/userProvider";
import TransactionList from "../Dashboard/TransactionList";
import Card from "../Dashboard/Card";
import TransactionForm from "../Dashboard/TransactionForm";
import DropDown from "./DropDown";

function RightSideBar() {
  const { user } = useContext(userContext);

  const [primaryCard, setPrimarCard] = useState({});

  const [loading, setLoading] = useState(true);
  // const { data, loading, error } = useFetch("/api/cards/primary");
  // console.log("DATA", data);
  // setPrimarCard(...data);

  useEffect(() => {
    const getPrimaryCard = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("/api/cards/primary");
        // console.log("...", response.data);
        setPrimarCard(...response.data);
        setLoading(false);
        // console.log("---------", response);
      } catch (err) {
        console.log(err);
      }
    };
    getPrimaryCard();
  }, []);

  console.log(user);
  return (
    // user && (
    <Grid
      display="flex"
      container
      // alignContent="center"
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
      {/* <Grid container md={12} direction="row"> */}
      {/* <Grid item className={`${classes.user_name}`}></Grid> */}

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        className={`${classes.profile_container}`}
        item
      >
        {user?.firstName} {user?.lastName}
        <img className={`${classes.pfp}`} src={user.profilePicture} alt="pfp" />
        <DropDown />
      </Grid>

      {loading ? (
        <div>Please wait for data</div>
      ) : (
        <Card
          number={primaryCard.number}
          name={primaryCard.name}
          expiry={primaryCard.expiry}
          cvc={primaryCard.cvc}
          // preview={false}
        />
      )}
      {/* </Grid> */}
      <TransactionList />
      <TransactionForm />
    </Grid>
  );
  // );
}

export default RightSideBar;
