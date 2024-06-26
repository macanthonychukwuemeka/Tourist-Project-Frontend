// import {
//   Alert,
//   Avatar,
//   Box,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   IconButton,
//   Snackbar,
//   Typography,
// } from "@mui/material";

// import React, { useState } from "react";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
// import EditLocationAltIconAlt from "@mui/icons-material/EditLocationAlt";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { Link } from "react-router-dom";
// import { postDelete } from "../api-helpers/helpers";

// const DiaryItem = ({
//   title,
//   description,
//   image,
//   location,
//   date,
//   id,
//   user,
//   name,
// }) => {
//   // only the logged in user will use the edith and delete function
//   const [open, setOpen] = useState(false);
//   const isLoggedInUser = () => {
//     if (localStorage.getItem("userId") === user) {
//       return true;
//     }
//     return false;
//   };
//   const handleDelete = () => {
//     postDelete(id)
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//     setOpen(true);
//   };
//   return (
//     <Card
//       sx={{
//         Width: "50%",
//         height: "auto",
//         margin: 1,
//         Padding: 1,
//         display: "flex",
//         flexDirection: "column",
//         boxShadow: "5px 5px 10px #ccc",
//       }}
//     >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
//             {name}
//             {/* .charAt(0) */}
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             {<EditLocationAltIconAlt />}
//           </IconButton>
//         }
//         title={location}
//         header={location}
//         subheader={date}
//       />
//       <CardMedia height="194" src={image} alt={title} />
//       <CardContent>
//         <Typography paddingBottom={1} variant="h6" color="text.secondary">
//           {title}
//         </Typography>
//         <hr />
//         <Box display="flex">
//           <Typography
//             width="12.625rem"
//             paddingTop={1}
//             fontWeight={"bold"}
//             variant="div"
//           >
//             {name}
//           </Typography>
//           <Typography paddingTop={1} variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//         </Box>
//       </CardContent>

//       {isLoggedInUser() && (
//         <CardActions sx={{ marginLeft: "auto" }}>
//           <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
//             {" "}
//             <ModeEditOutlineIcon />{" "}
//           </IconButton>
//           <IconButton onClick={handleDelete} color="error">
//             <DeleteForeverIcon />
//           </IconButton>
//         </CardActions>
//       )}
//       <Snackbar
//         open={open}
//         autoHideDuration={5000}
//         onClose={() => setOpen(false)}
//       >
//         <Alert
//           onClose={() => setOpen(false)}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           This is a success message!
//         </Alert>
//       </Snackbar>
//     </Card>
//   );
// };

// export default DiaryItem;

import {
  Alert,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { postDelete } from "../api-helpers/helpers";
const DiaryItem = ({
  title,
  description,
  image,
  location,
  date,
  id,
  user,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const isLoogedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return false;
    }
    return true;
  };

  const handleDelete = () => {
    postDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setOpen(true);
  };
  return (
    <Card
      sx={{
        width: "50%",
        height: "auto",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {name}
            {/* .charAt(0) */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIcon />}
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />

      <img height="194" src={image} alt={title} />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display="flex">
          <Typography
            width="auto"
            sx={{ mr: 1 }}
            fontWeight={"bold"}
            variant="caption"
          >
            {name}:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>

      {isLoogedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton onClick={handleDelete} color="error">
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      )}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default DiaryItem;
