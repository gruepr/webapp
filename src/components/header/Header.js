import { Link } from "react-router-dom";
import content from "../../content/content";

const Header = () => {
  return (
    <div className="flow-root items-center bg-white px-16 py-1">
      <div className="float-left flex items-center h-20 space-x-10">
        <div className="text-2xl pb-2 paytone text-primary-500">gruepr</div>
        <div className="link no-underline space-x-4">
          <Link to="/"> {content.navbar.home} </Link>
          <Link to="/Faqs"> {content.navbar.faq} </Link>
          <Link to="/AboutUs"> {content.navbar.about} </Link>
        </div>
      </div>
      <div className="float-right flex items-center justify-center h-20 space-x-8">
        <div className="body font-normal">
          <a onClick={() => console.log("Home")}> {content.emailText} </a>
        </div>
        <button className="primary-button">
          <a onClick={() => console.log("FAQs")}>
            {content.navbar.downloadButton}
          </a>
        </button>
      </div>
    </div>
  );
};
export default Header;
