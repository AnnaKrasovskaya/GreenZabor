import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import NavMenu from "./Components/NavMenu";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Routes/Home";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Routes/Page/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <NavMenu />
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:page"} element={<Page />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
