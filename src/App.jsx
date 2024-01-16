import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Navbar/Header";
import Login from "./pages/LoginAndSign-up/Login/Login";
import SignUp from "./pages/LoginAndSign-up/Sign-up/SignUp";
import NewUsersProvider from "./Context/NewUsersContext";
import BooksProvider from "./Context/BooksContext";
import BookDetails from "./pages/BookDetails/BookDetails";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
import LibraryProvider from "./Context/LibraryContext";
import Fiction from "./pages/Categories/Fiction";
import Comics from "./pages/Categories/Comics";
import Art from "./pages/Categories/Art";
import HowToBooks from "./pages/Categories/HowTo";
import Crime from "./pages/Categories/Crime";
import Criticism from "./pages/Categories/Criticism";
import Cars from "./pages/Categories/Cars";
import ReadBook from "./pages/ReadBook/ReadBook";
import History from "./pages/Categories/History";

function App() {
  return (
    <>
      <BooksProvider>
        <NewUsersProvider>
          <LibraryProvider>
            <Header />
            <Routes>
              <Route path={"/"} exact element={<Home />} />
              <Route path={"/sign-up"} element={<SignUp />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/:name"} element={<BookDetails />} />
              <Route path={"/library"} element={<MyLibrary />} />
              <Route path={"/reading-book"} element={<ReadBook />} />

              {/* Categories */}
              <Route path={"/fiction"} element={<Fiction />} />
              <Route path={"/comics"} element={<Comics />} />
              <Route path={"/art"} element={<Art />} />
              <Route path={"/educational"} element={<HowToBooks />} />
              <Route path={"/crime"} element={<Crime />} />
              <Route path={"/criticism"} element={<Criticism />} />
              <Route path={"/cars"} element={<Cars />} />
              <Route path={"/history"} element={<History />} />
              {/*  */}
            </Routes>
          </LibraryProvider>
        </NewUsersProvider>
      </BooksProvider>
    </>
  );
}

export default App;
