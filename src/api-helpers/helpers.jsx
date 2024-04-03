import axios from "axios";
export const getAllPosts = async () => {
  const res = await axios.get("/posts");
  if (res.status !== 200) {
    return console.log("Error Occured");
  }
  const data = res.data;
  return data;
};
// export const sendAuthRequest = async (signup, data) => {
//   try {
//     const res = await axios.post(`/user/${signup ? "signup" : "login"}/`, {
//       name: data.name ? data.name : "",
//       email: data.email,
//       password: data.password,
//     });

//     if (res && (res.status === 200 || res.status === 201)) {
//       return res.data;
//     } else {
//       console.log("Unable to Authenticate");
//       return null;
//     }
//   } catch (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       console.log("Server responded with status code:", error.response.status);
//       console.log("Response data:", error.response.data);
//       console.log("Response headers:", error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.log("No response received:", error.request);
//     } else {
//       // Something happened in setting up the request that triggered an error
//       console.log("Request setup error:", error.message);
//     }
//     return null;
//   }
// };

// export const sendAuthRequest = async (signup, data) => {
//   try {
//     const res = await axios.post(`/user/${signup ? "signup" : "login"}/`, {
//       name: data.name ? data.name : "",
//       email: data.email,
//       password: data.password,
//     });

//     if (res && (res.status === 200 || res.status === 201)) {
//       return res.data;
//     } else {
//       console.log("Unable to Authenticate");
//       return null; // Or throw an error if you want to handle it differently
//     }
//   } catch (error) {
//     console.log("Error:", error);
//     return null; // Or throw an error if you want to handle it differently
//   }
// };

// export const sendAuthRequest = async (signup, data) => {
//   try {
//     const res = await axios.post(`/user/${signup ? "signup" : "login"}/`, {
//       name: data.name ? data.name : "",
//       email: data.email,
//       password: data.password,
//     });

//     if (res.status === 200 || res.status === 201) {
//       return res.data;
//     } else {
//       console.log("Unable to Authenticate");
//       return null; // Or throw an error if you want to handle it differently
//     }
//   } catch (error) {
//     console.log("Error:", error);
//     return null; // Or throw an error if you want to handle it differently
//   }
// };

// export const sendAuthRequest = async (signup, data) => {
//   try {
//     const res = await axios.post(`/user/${signup ? "signup" : "login"}/`, {
//       name: data.name ? data.name : "",
//       email: data.email,
//       password: data.password,
//     });

//     if (res.status === 200 || res.status === 201) {
//       return res.data;
//     } else {
//       console.log("Unable to Authenticate");
//       return null; // Or throw an error if you want to handle it differently
//     }
//   } catch (error) {
//     console.log("Error:", error);
//     return null; // Or throw an error if you want to handle it differently
//   }
// };

// export const sendAuthRequest = async (signup, data) => {
//   const res = await axios
//     .post(`/user/${signup ? "signup" : "login"}/`, {
//       name: data.name ? data.name : "",
//       email: data.email,
//       password: data.password,
//     })
//     .catch((err) => console.log(err));

//   if (res.status !== 200 && res.status !== 201) {
//     return console.log("Unable to Authenticate");
//   }
//   const resData = await res.data;
//   return resData;
// };

export const sendAuthRequest = async (signup, data) => {
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}/`, {
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
