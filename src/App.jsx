import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Diary from "./diary/Diary";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
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
