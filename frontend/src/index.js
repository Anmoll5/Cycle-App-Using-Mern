import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Header from "./Components/Header";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path ="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path ="/about" element ={<About />} />
          <Route path ="/gallery" element ={<Gallery />} />
          <Route path ="/contact" element ={<Contact />} />

      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
