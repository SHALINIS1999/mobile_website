import React from "react";
import NavBar from "./components/NavBar";
import CardShop from "./components/CardShop";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signin from "./components/Signin";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Sevices";
import Contact from "./components/Contact";

function App() {

  return(
    <div>
      {/* <NavBar/>
      <CardShop/>
      <Footer/> */}
      {/* <NavBar/> */}

      <Routes>

      <Route path="/" element={<CardShop/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>

      </Routes>

    </div>
  )
}

export default App