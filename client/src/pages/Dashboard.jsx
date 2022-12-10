import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import RightSideBar from "../components/Sidebar/RightSideBar";
import Card from "../components/Dashboard/Card";
import CardForm from "../components/Dashboard/CardForm";
import BasicLayout from "../components/BasicLayout";
import useFetch from "../hook/useFetch";
import axios from "axios";
function Dashboard() {
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

  // console.log("///", primaryCard);
  console.log("loading", loading);
  return (
    <BasicLayout>
      <Grid item md={5}>
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

        {/* <CardForm /> */}
      </Grid>
    </BasicLayout>
  );
}

export default Dashboard;
