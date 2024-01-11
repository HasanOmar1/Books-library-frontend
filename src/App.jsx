import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Navbar/Header";
import Login from "./pages/LoginAndSign-up/Login/Login";
import SignUp from "./pages/LoginAndSign-up/Sign-up/SignUp";
import NewUsersProvider from "./Context/NewUsersContext";
import BooksProvider from "./Context/BooksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <NewUsersProvider>
          <Header />
          <Routes>
            <Route path={"/"} exact element={<Home />} />
            <Route path={"/sign-up"} element={<SignUp />} />
            <Route path={"/login"} exact element={<Login />} />
          </Routes>
        </NewUsersProvider>
      </BooksProvider>
    </>
  );
}

export default App;
