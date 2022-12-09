import { NavLink } from "react-router-dom";
import content from "../../content/content";
import hamburger from "../../img/hamburger.svg";

const Header = () => {
  return (
    <div className="bg-white flow-root laptop:px-16 mobile:px-[16px] border border-neutral-200 border-t-0 border-l-0 border-r-0 border-b-1">
      <div className="h-20 float-left flex items-center laptop:space-x-0 mobile:space-x-[24px]">
        {/* Hamburger menu in mobile view */}
        <button className="mobile:flex laptop:hidden">
          <img src={hamburger} alt="hamburger menu" />
          {/* <Link to="/"> {content.navbar.home} </Link>
          <Link to="/Faqs"> {content.navbar.faq} </Link>
          <Link to="/AboutUs"> {content.navbar.about} </Link> */}
        </button>

        <NavLink
          to="/"
          className="text-2xl pb-2 paytone text-primary-500 laptop:pr-10"
        >
          gruepr
        </NavLink>

        {/* Visible links in larger navbar */}
        <div className="link no-underline laptop:space-x-4 tablet:flex mobile:hidden">
          <NavLink
            activeStyle=""
            to="/Faqs"
            className={({ isActive }) =>
              isActive
                ? "border border-primary-500 border-t-0 border-l-0 border-r-0 border-b-4"
                : ""
            }
          >
            {content.navbar.faq}
          </NavLink>
          <NavLink to="/AboutUs"> {content.navbar.about} </NavLink>
        </div>
      </div>

      <div className="h-20 float-right flex items-center laptop:space-x-8">
        <div className="body font-normal hidden tablet:flex">
          {content.emailText}
        </div>
        <button className="laptop:primary-button mobile:primary-button mobile:p-[16px]">
          <a onClick={() => console.log("FAQs")}>
            {content.navbar.downloadButton}
          </a>
        </button>
      </div>
    </div>
  );
};
export default Header;
