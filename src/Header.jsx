import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import React from "react";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const linksArr = ["home", "diaries", "auth"];
  const [value, setValue] = useState(0);

  return (
    <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
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
              LinkComponent={Link}
              to={`/${link === "home" ? "" : link}`}
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
