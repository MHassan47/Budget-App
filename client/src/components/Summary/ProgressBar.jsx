import React from "react";
import Grid from "@mui/material/Grid";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ currentExpenses }) {
  const budget = 5000;
  const percentage = Math.round((currentExpenses / budget) * 100);

  return (
    <Grid style={{ width: "14rem", height: "14rem", marginLeft: "2rem" }}>
      <CircularProgressbarWithChildren
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',
          // Colors
          pathColor: `rgba(103,86,245,255)`,
          textColor: "white",
          trailColor: "rgba(0,0,0,0.1)",
          backgroundColor: "#3e98c7",
        })}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            width: "9rem",
            fontSize: "1.4rem",
            color: "white",
            fontWeight: "600",
            height: "9rem",
            borderRadius: "100%",
            backgroundColor: "#5e50ee",
          }}
        >
          <div style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)" }}>
            Total
          </div>
          ${Math.round(currentExpenses * 100) / 100}
          <div style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)" }}>
            {percentage}%
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </Grid>
  );
}

export default ProgressBar;
