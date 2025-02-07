import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const DarkModeToggle = ({ toggleTheme, themeMode }) => {
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default DarkModeToggle;
