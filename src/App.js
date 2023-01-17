import React from "react";
import { useGlobalContext } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./components/Footer";
import Fullscreen from "./components/Fullscreen";
import Courses from "./Courses";
import Blogs from "./Blogs";
import Research from "./Research";
import SinglePage from './SinglePage'

function App() {
  const { zoomed } = useGlobalContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route exact path="/projects" element={<Projects></Projects>}></Route>
          <Route exact path="/courses" element={<Courses></Courses>}></Route>
          <Route exact path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route exact path="/research" element={<Research></Research>}></Route>
          <Route
            path={`/:mode/course`}
            element={<SinglePage></SinglePage>}
          ></Route>
          <Route
            path={`/:mode/:id/`}
            element={<SinglePage></SinglePage>}
          ></Route>
          <Route
            path={`/:mode/:id`}
            element={<SinglePage></SinglePage>}
          ></Route>
          <Route
            path={`/:mode/:id`}
            element={<SinglePage></SinglePage>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

      {zoomed ? <Fullscreen></Fullscreen> : null}
    </div>
  );
}

export default App;
