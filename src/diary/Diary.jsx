import { Box } from "@mui/material";
import React from "react";
import DiaryItem from "./DiaryItem";

const Diary = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {[12345]}
      <DiaryItem />
    </Box>
  );
};

export default Diary;
