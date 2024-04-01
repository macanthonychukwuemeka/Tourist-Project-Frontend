import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
// import { EditLocationAltIcon } from "@mui/icons-material";
<EditLocationAltIcon />;
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
            {/* {<EditLocationAltIcon />} */}
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
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DiaryItem;
