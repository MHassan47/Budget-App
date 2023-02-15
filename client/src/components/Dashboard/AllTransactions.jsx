import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

function AllTransactions() {
  const { transactions, isLoading, isError, isSuccess } = useSelector(
    (state) => state.transactions
  );

  console.log("----", transactions);
  const columns = [
    // { field: "_id", headerName: "ID" },
    {
      field: "createdAt",
      headerName: "Date",
      type: "date",
      headerAlign: "left",
      align: "left",
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(date);
        return formattedDate;
      },
    },
    {
      field: "type",
      headerName: "Type",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "left",
      flex: 1,
      align: "left",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
  ];

  return (
    <Box
      m="80px"
      style={{
        fontSize: "1.5rem",
      }}
    >
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
          rows={transactions}
          getRowId={(row) => row._id}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

export default AllTransactions;
