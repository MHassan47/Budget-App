import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";
import Button from "../Button";

function CardForm() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!number || !name || !expiry || !cvc) {
      setError("Field(s) cannot be empty!");
    }

    const body = { number, name, expiry, cvc };
    try {
      const response = await axios.post("/api/cards/add", body);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid>
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focus={focus}
      />
      <Grid>
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="cvc"
            name="cvc"
            placeholder="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <Button
            text="SAVE CARD"
            onClick={handleSubmit}
            propClassName={"main__btn"}
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default CardForm;
