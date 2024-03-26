import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import React from "react";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { useState } from "react";

const Header = () => {
  const linksArr = ["Home", "Diary", "Auth"];
  const [value, setValue] = useState();

  return (
    <AppBar sx={{ bgcolor: "transparent" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {linksArr.map((link) => (
            <Tab
              key={link}
              label={link}
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "15px",
                },
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
