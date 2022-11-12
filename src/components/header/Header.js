import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import FAQs from "../faqs/Faqs";

const Header = () => {
  return (
    <div className="flow-root items-center bg-white px-16 py-1">
      <div className="float-left flex items-center h-20 space-x-10">
        <div className="text-2xl pb-2 paytone text-gblue">gruepr</div>
        <div className="text-base font-bold dmsans text-dark space-x-4">
          <Link to="/">Home</Link>
          <Link to="/Faqs">FAQs</Link>
        </div>
      </div>
      <div className="float-right flex items-center justify-center h-20 space-x-8">
        <div className="text-base font-normal dmsans text-dark">
          <a onClick={() => console.log("Home")}>info@gruepr.com</a>
        </div>
        <button className="bg-dark py-4 px-8 text-base font-bold dmsans text-white">
          <a onClick={() => console.log("FAQs")}>Download</a>
        </button>
      </div>
    </div>
  );
};
export default Header;
