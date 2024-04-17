// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.js";
import Qr from "../src/pages/Qr.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode/:code" element={<Qr />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
