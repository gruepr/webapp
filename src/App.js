import "./App.css";
import Home from "./components/home-page/Home";
import Faqs from "./components/faq-page/Faqs";
import AboutUs from "./components/about-us/AboutUs";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import Download from "./components/download-page/Download";
import ChangeLog from "./components/change-log-page/ChangeLog";

import * as React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/ChangeLog" element={<ChangeLog/>} />

      </Routes>
    </div>
  );
}
export default App;
