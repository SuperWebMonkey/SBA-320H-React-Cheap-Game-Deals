import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* <Header /> */}
        <Route path="/" element={<Main />} />
        {/* <Main /> */}
        {/* <Footer /> */}
      </Routes>
    </>
  );
}

export default App;
