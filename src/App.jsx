import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Values from "./pages/Values"
import Interests from "./pages/Interests"
import 'bootstrap/dist/css/bootstrap.css';
import "theme.scss"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/values" element={<Values/>} />
      <Route path="/interests" element={<Interests/>} />
    </Routes>
    </>
  );
}
