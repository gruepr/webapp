import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flow-root items-center bg-white px-16 py-1">
      <div className="float-left flex items-center h-20 space-x-10">
        <div className="text-2xl pb-2 paytone text-neutral-500">gruepr</div>
        <div className="text-base font-bold dmsans text-neutral-500 text-decoration-line: underline space-x-4">
          <Link to="/Faqs">How it works</Link>
          <Link to="/Faqs">FAQs</Link>
          <Link to="/Faqs">Privacy Policy</Link>
        </div>
      </div>
      <div className="float-right flex items-center justify-center h-20 space-x-8">
        <div className="text-base font-normal dmsans text-neutral-500">
          <a onClick={() => console.log("Home")}>info@gruepr.com</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
