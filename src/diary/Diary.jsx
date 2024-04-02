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
      {[1, 2, 3, 4, 5].map((item) => (
        <DiaryItem key={item} />
      ))}
    </Box>
  );
};

export default Diary;
