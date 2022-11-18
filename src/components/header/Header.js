import { Link } from "react-router-dom";
import content from "../../content/content";

const Header = () => {
  return (
    <div className="flow-root items-center bg-white px-16 py-1">
      <div className="float-left flex items-center h-20 space-x-10">
        <div className="text-2xl pb-2 paytone text-primary-500">gruepr</div>
        <div className="text-base font-bold dmsans text-neutral-500 space-x-4">
          <Link to="/"> {content.navbar.home} </Link>
          <Link to="/Faqs"> {content.navbar.faq} </Link>
          <Link to="/AboutUs"> {content.navbar.about} </Link>
        </div>
      </div>
      <div className="float-right flex items-center justify-center h-20 space-x-8">
        <div className="text-base font-normal dmsans text-neutral-500">
          <a onClick={() => console.log("Home")}> {content.emailText} </a>
        </div>
        <button className="bg-neutral-500 py-4 px-8 text-base font-bold dmsans text-white">
          <a onClick={() => console.log("FAQs")}>
            {content.navbar.downloadButton}
          </a>
        </button>
      </div>
    </div>
  );
};
export default Header;
