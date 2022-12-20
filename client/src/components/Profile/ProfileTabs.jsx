import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function ProfileTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  console.log(tabIndex);
  return (
    <Box
      style={{
        display: "flex",
        marginTop: "0.4rem",
        borderTop: "0.09rem solid  rgb(182, 180, 180)",
        justifyContent: "center",
      }}
    >
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab
          label="Profile"
          disableRipple
          style={{ fontSize: "1rem", color: "#290c64", fontWeight: "bolder" }}
        />
        <Tab
          label="Details"
          disableRipple
          style={{ fontSize: "1rem", color: "#290c64", fontWeight: "bolder" }}
        />
      </Tabs>
    </Box>
  );
}

export default ProfileTabs;
