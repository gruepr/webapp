import "./App.css";
import Home from "./components/Home";
import Faqs from "./components/faq-page/Faqs";
import AboutUs from './components/about-us/AboutUs';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/about-us/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/AboutUs" element={<AboutUs />} />




export default App;
