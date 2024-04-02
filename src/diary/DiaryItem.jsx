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
{
  /* <EditLocationAltIcon />; */
}
const DiaryItem = () => {
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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        height="194"
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDgxODR8MHwxfHNlYXJjaHwxMHx8bW91bnRhaW58ZW58MHx8fHwxNzExOTIzMDQ1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Paella dish"
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          This impressive paella
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
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto" }}>
        <IconButton color="warning">
          {" "}
          <ModeEditOutlineIcon />{" "}
        </IconButton>
        <IconButton color="error">
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DiaryItem;
