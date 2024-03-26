import React from "react";
import { Box, Typography } from "@mui/material";
const Home = () => {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img src="/road.jpg" alt="road img" width="100%" height="70%" />
      <Typography
        fontFamily=" Dancing Script, cursive"
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        width="100%"
        sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
          background: "#B2C8DF",
        }}
      >
        Dare to live the Life you've always wanted
      </Typography>
      <Box
        width="100%"
        height="30%"
        display={"flex"}
        flexDirection="column"
        variant="h4"
        padding={4}
      >
        {" "}
        SHARE YOUR TRAVEL DIARIES WITH US
      </Box>
    </Box>
  );
};

export default Home;
