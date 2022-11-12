import "./App.css";
import Home from "./components/Home";
import Faqs from "./components/faqs/Faqs";
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Faqs" element={<Faqs />} />
        {/* <Route path="download" element={<Download />} /> */}
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Faqs">FAQs</Link>
          </li>
          <li>{/* <Link to="/dashboard">info@gruepr.com</Link> */}</li>
          <li>{/* <Link to="/download">Download</Link> */}</li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default App;
