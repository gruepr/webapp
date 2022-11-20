import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flow-root items-center bg-white px-16 py-1">
      <div className="float-left flex items-center h-20 space-x-10">
        <div className="text-2xl pb-2 paytone text-primary-500">gruepr</div>
        <div className="link no-underline space-x-4">
          <Link to="/">Home</Link>
          <Link to="/Faqs">FAQs</Link>
          <Link to="/AboutUs">About Us</Link>
        </div>
      </div>
      <div className="float-right flex items-center justify-center h-20 space-x-8">
        <div className="body font-normal">
          <a onClick={() => console.log("Home")}>info@gruepr.com</a>
        </div>
        <button className="primary-button">
          <a onClick={() => console.log("FAQs")}>Download</a>
        </button>
      </div>
    </div>
  );
};
export default Header;
