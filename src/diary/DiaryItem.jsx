import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import EditLocationAltIconAlt from "@mui/icons-material/EditLocationAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
{
  /* <EditLocationAltIcon />; */
}
const DiaryItem = ({ title, description, image, location, date, id, user }) => {
  // only the logged in user will use the edith and delete function

  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return false;
    }
    return true;
  };
  return (
    <Card
      sx={{
        Width: "50%",
        height: "50vh",
        margin: 1,
        Padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIconAlt />}
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />
      <CardMedia height="194" src={image} alt={title} />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box display="flex">
          <Typography
            width="12.625rem"
            paddingTop={1}
            fontWeight={"bold"}
            variant="div"
          >
            Mexico New zeland
          </Typography>
          <Typography paddingTop={1} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>

      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
            {" "}
            <ModeEditOutlineIcon />{" "}
          </IconButton>
          <IconButton color="error">
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default DiaryItem;
