import "./App.css";
import Home from "./components/home-page/Home";
import Faqs from "./components/faq-page/Faqs";
import AboutUs from "./components/about-us/AboutUs";
import SurveyUI from "./components/survey/SurveyUI";
import Demo from "./components/survey/Demo";
import Multichoice from "./components/survey/Multichoice";
import MC from "./components/survey/MC";
import Schedulingch from "./components/survey/Schedulingch";
import Courseinfo from "./components/survey/Courseinfo";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import Preview from "./components/survey/Preview";
import Demographic from "./components/survey/Demographic";
import * as React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from './components/survey/context';


const CLIENT_ID = "185862281568-2hgglps5jv8erpobb8hl9h1i5ikkdps1.apps.googleusercontent.com"
const API_KEY = "AIzaSyClDnIa2ktzsPMWAe5mImig1YBYfJFWgjA"
const SCOPES = "https://www.googleapis.com/auth/drive"


function App() {

  return (
    <div className="App">
      <DataProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SurveyUI" element={<SurveyUI />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Demographic" element={<Demographic />} />
        <Route path="/Multichoice" element={<Multichoice />} />
        <Route path="/Schedulingch" element={<Schedulingch />} />
        <Route path="/MC" element={<MC />} />
        <Route path="/Courseinfo" element={<Courseinfo />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Preview" element={<Preview />} />
      </Routes>
      </DataProvider>
    </div>
  );
}
export default App;
