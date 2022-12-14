import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <GridViewOutlinedIcon />,
    link: "/dashboard",
  },
  {
    title: "Calendar",
    icon: <CalendarMonthOutlinedIcon />,
    link: "/calendar",
  },
  {
    title: "My Profile",
    icon: <PermIdentityOutlinedIcon />,
    link: "/profile",
  },
  {
    title: "Transaction",
    icon: <ReceiptSharpIcon />,
    link: "/transaction",
  },
  {
    title: "Cards",
    icon: <CreditCardOutlinedIcon />,
    link: "/card",
  },
  {
    title: "Settings",
    icon: <SettingsOutlinedIcon />,
    link: "/settings",
  },
];
