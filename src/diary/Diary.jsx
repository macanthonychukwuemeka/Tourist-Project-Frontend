import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import DiaryItem from "./DiaryItem";
import { getAllPosts } from "../api-helpers/helpers";

const Diary = () => {
  const [posts, setPosts] = useState();
  console.log(posts);
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
            // user={item.user._id}
            // name={item.user.name}
          />
        ))}
    </Box>
  );
};

export default Diary;
