import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

function AllTransactions() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllTransactions = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("/api/transactions/");

        setAllTransactions(response.data);
        setLoading(false);
        // console.log("---------", response);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTransactions();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID" },

    {
      field: "type",
      headerName: "Type",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "left",
      //   flex: 1,
      align: "left",
    },
    {
      field: "name",
      headerName: "Name",
      //   flex: ,
      align: "center",
      cellClassName: "name-column--cell",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  return (
    <Box m="20px" style={{ fontSize: "1.5rem" }}>
      <Box
        m="5rem 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#4333a1",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#9859fe",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "none",
          },
          "& .MuiCheckbox-root": {
            color: "black",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={allTransactions}
          getRowId={(row) => row._id}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

export default AllTransactions;
