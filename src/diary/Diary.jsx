import { Box } from "@mui/material";
import React, { useState } from "react";
import DiaryItem from "./DiaryItem";
import { useEffect } from "react";
import { getAllPosts } from "../api-helpers/helpers";

const Diary = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data?.posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {posts &&
        posts.map((item, index) => (
          <DiaryItem
            date={new Date(`${item.date}`).toLocaleDateString()}
            key={index}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
          />
        ))}
    </Box>
  );
};

export default Diary;
