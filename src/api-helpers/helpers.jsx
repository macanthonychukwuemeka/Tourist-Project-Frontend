import axios from "axios";

export const getAllPosts = async () => {
  const res = await axios.get("/posts");
  console.log(res.data);
  if (res.status !== 200) {
    return console.log("Error Occured");
  }
  const data = res.data;
  return data;
};
export const sendAuthRequest = async (signup, data) => {
  // This line declares an asynchronous function named sendAuthRequest which takes two parameters: signup, a boolean indicating whether the user is signing up (true) or logging in (false), and data, an object containing user information such as name, email, and password.
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}/`, {
      //we used .post because we want to get something from the user
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));
  if (res.status !== 200 && res.status !== 201) {
    return console.log("Unable to Authenticate");
  }
  const resData = await res.data;
  return resData;
};

export const addPost = async (data) => {
  const res = await axios
    .post("/posts/", {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));
  if (res.status !== 201) {
    return console.log("Error Occurred");
  }
  const resData = await res.data;
  return resData;
};

export const getPostDetails = async (id) => {
  const res = await axios.get(`/posts/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unable To Fetch Diary");
  }
  const resData = await res.data;
  return resData;
};
export const postUpdate = async (data, id) => {
  const res = await axios
    .put(`/posts/${id}`, {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to update");
  }
  const resData = await res.data;
  return resData;
};
export const postDelete = async (id) => {
  const res = await axios
    .delete(`/posts/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to delete");
  }

  const resData = await res.data;
  return resData;
};
// export const getUserDetails = async () => {
//   const id = localStorage.getItem("userId");
//   const res = await axios.get(`/user/${id}`).catch((err) => console.log(err));

//   if (res.status !== 200) {
//     return console.log("No user found");
//   }

//   const resData = await res.data;
//   return resData;
// };
