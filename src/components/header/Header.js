import { NavLink } from "react-router-dom";
import content from "../../content/content";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div className="z-50 bg-white flow-root laptop:px-16 mobile:px-[16px] border border-neutral-200 border-t-0 border-l-0 border-r-0 border-b-1">
      <div className="h-20 float-left flex items-center laptop:space-x-0 mobile:space-x-[24px]">
        {/* Hamburger menu in mobile view */}
        <div className="laptop:hidden mobile:block">
          <HamburgerMenu />
        </div>

        <NavLink
          to="/"
          className="text-2xl pb-2 paytone text-primary-500 laptop:pr-10"
        >
          gruepr
        </NavLink>

        {/* Visible links in larger navbar */}
        <div className="link no-underline laptop:space-x-4 laptop:flex mobile:hidden">
          <NavLink
            to="/Faqs"
            className={({ isActive }) =>
              isActive
                ? "mt-[12px] mb-[8px] py-[8px] border-primary-500 border-0 border-b-4"
                : "mt-[12px] mb-[8px] py-[8px]"
            }
          >
            {content.navbar.faq}
          </NavLink>
          <NavLink
            to="/AboutUs"
            className={({ isActive }) =>
              isActive
                ? "mt-[12px] mb-[8px] py-[8px] border-primary-500 border-0 border-b-4"
                : "mt-[12px] mb-[8px] py-[8px]"
            }
          >
            {content.navbar.about}
          </NavLink>
        </div>
      </div>

      <div className="h-20 float-right flex items-center tablet:space-x-8">
        <div className="body font-normal hidden tablet:flex">
          {content.emailText}
        </div>
        <button className="primary-button">
          <Link to="/Download">{content.navbar.downloadButton}</Link>
        </button>
      </div>
    </div>
  );
};
export default Header;
