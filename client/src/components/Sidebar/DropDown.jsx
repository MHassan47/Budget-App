import * as React from "react";
import { useContext } from "react";
import { userContext } from "../../provider/userProvider";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import MenuItemUnstyled, {
  menuItemUnstyledClasses,
} from "@mui/base/MenuItemUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 200px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius:  0 0 0.75em 0.75em;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  margin-top: 26px;
  margin-right: 29px;
  border-top: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 4px;
  `
);

const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  justify-content: "center";
    align-items : 'center';
  border-radius: 0.45em;
  cursor: default;
  user-select: none;
  &:last-of-type {
    border-bottom: none;
  }
  &.${menuItemUnstyledClasses.focusVisible} {
    outline: 0px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
  }
  &:hover:not(.${menuItemUnstyledClasses.disabled}) {
    
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const Popper = styled(PopperUnstyled)`
  z-index: 1;
`;

export default function UnstyledMenuSimple() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, setUser } = useContext(userContext);
  const isOpen = Boolean(anchorEl);
  const buttonRef = React.useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    console.log(isOpen);
    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleLogout = () => {
    console.log("logging out");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("login");
    setUser({});
    navigate("/");
  };

  const close = () => {
    setAnchorEl(null);
    buttonRef.current.focus();
  };

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      close();
      handleLogout();
    };
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <KeyboardArrowDownIcon onClick={handleButtonClick} ref={buttonRef} />
      <MenuUnstyled
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        components={{ Root: Popper, Listbox: StyledListbox }}
      >
        <StyledMenuItem
          onClick={createHandleMenuClick("Log out")}
          style={{ alignItems: "center", display: "flex" }}
        >
          <span style={{ marginRight: "auto" }}>Log out</span>
          <LogoutIcon style={{ marginLeft: "auto" }} />
        </StyledMenuItem>
      </MenuUnstyled>
    </div>
  );
}
