import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { sendAuthRequest } from "../api-helpers/helpers";
import { useDispatch } from "react-redux";
import { authAction } from "../Store";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (isSignup) {
      sendAuthRequest(true, input)
        .then((data) => localStorage.setItem("userId", data.user._id))
        //to extract the id of the signedup new user
        //   else {
        // localStorage.setItem("userId", data.id);
        //if user already exist, we pull their stored id to authenticate them
        .then(() => {
          dispatch(authAction.login());
        })
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, input).then((data) =>
        localStorage
          .setItem("userId", data.id)
          .then(() => {
            dispatch(authAction.login());
          })
          .catch((err) => console.log(err))
      );
    }
  };
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          width="80%"
          padding={5}
          margin="auto"
        >
          <Typography padding={2} variant="h4" textAlign={"center"}>
            {isSignup ? "SignUp" : "Login"}
          </Typography>
          {isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                margin="normal"
                value={input.name}
                name="name"
                required
                onChange={handleChange}
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            margin="normal"
            value={input.email}
            name="email"
            required
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <TextField
            margin="normal"
            value={input.password}
            name="password"
            required
            onChange={handleChange}
          />
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="contained"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => setisSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            variant="outlined"
          >
            Change to {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
