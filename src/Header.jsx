import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: 1 }}>This is our header</Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
