import { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Button from "../Button";
import classes from "../Styles/Transaction.module.scss";
function CalendarModal({ isOpen, onClose, onEventAdded }) {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ title, startDate, endDate });
    onEventAdded({
      //   type,
      title,
      startDate,
      endDate,
    });
    onClose();
  };
  return (
    <Grid
      container
      ref={modalRef}
      md={11}
      justifyContent="center"
      direction="column"
      style={{
        // border: "1px solid black",
        backgroundColor: "rgba(255,255,255,0.7)",
        heigh: "25vh",
        width: "25vw",
        boxShadow: "5px 5px 18px rgba(60, 64, 67, 0.1)",
        borderRadius: "30px",
        left: "45%",
        // right: "0",
        top: "40%",
        // bottom: "0",
        transform: "translate(-50%,-50%)",
        padding: "0.5rem",
        marginBottom: "1rem",
        zIndex: "999",
        position: "absolute",
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
        Add Event
      </Grid>
      <Grid container item md={4} direction="column">
        <form className={`${classes.transaction_form}`}>
          {/* <select name="Type" value={type} onChange={handleTypeChange}>
            <option value="" disabled>
              Event Type
            </option>
            <option value="purchase">Purchase</option>
            <option value="income">Income</option>
          </select> */}
          <input
            type="text"
            name="title"
            placeholder="Add a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            name="startDate"
            placeholder="Add a start date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            name="endDate"
            placeholder="Add a end date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          {/* <Datetime
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Datetime
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          /> */}
          <Button
            text="COMPLETE"
            onClick={onSubmit}
            propClassName={"main__btn"}
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default CalendarModal;
