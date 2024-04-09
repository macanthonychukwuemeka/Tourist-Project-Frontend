import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Diary from "./diary/Diary";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile/Profile";
import Add from "./diary/Addd";
import DiaryUpdate from "./diary/DiaryUpdate";
import { useEffect } from "react";
import { authAction } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      dispatch(authAction.login());
    }
  }, [localStorage]);

  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/diaries" element={<Diary />} />
          {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<DiaryUpdate />} />
            </>
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
// echo "# Tourist-Project-Frontend" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/macanthonychukwuemeka/Tourist-Project-Frontend.git
// git push -u origin main

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";
// import Auth from "./Auth/Auth";
// import Add from "./diary/Addd";
// import Diary from "./diary/Diary";
// import DiaryUpdate from "./diary/DiaryUpdate";
// import Header from "./Header";
// import Home from "./Home/Home";
// import Profile from "./Profile/Profile";
// import { authAction } from "./store";

// function App() {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   console.log(isLoggedIn);

//   useEffect(() => {
//     if (localStorage.getItem("userId")) {
//       dispatch(authAction.login());
//     }
//   }, [localStorage]);
//   return (
//     <div>
//       <header>
//         <Header />
//       </header>

//       <section>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/diaries" element={<Diary />} />
//           <Route path="/auth" element={<Auth />} />
//           {isLoggedIn && (
//             <>
//               <Route path="/add" element={<Add />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/post/:id" element={<DiaryUpdate />} />{" "}
//             </>
//           )}
//         </Routes>
//       </section>
//     </div>
//   );
// }

// export default App;
