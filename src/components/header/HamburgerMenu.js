import { Menu } from "@headlessui/react";
import hamburger from "../../img/hamburger.svg";
import { NavLink } from "react-router-dom";
import content from "../../content/content";

const HamburgerMenu = () => {
  return (
    <Menu as="div" className="w-full">
      <div>
        <Menu.Button className="inline-block">
          <img src={hamburger} alt="hamburger menu" />
        </Menu.Button>
      </div>

      <Menu.Items
        className="w-full absolute left-0 top-[81px] bg-white px-[16px] divide-y divide-neutral-50 
      border border-neutral-200 border-t-0 border-l-0 border-r-0 border-b-1"
      >
        <div className="block first-line:space-y-[4px] link no-underline">
          <Menu.Item>
            <div className="h-[40px] mt-[12px] py-[8px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "py-[8px] border-primary-500 border-0 border-b-4"
                    : ""
                }
              >
                {content.navbar.home}
              </NavLink>
            </div>
          </Menu.Item>

          <Menu.Item>
            <div className="h-[40px] mt-[12px] py-[8px]">
              <NavLink
                to="/Faqs"
                className={({ isActive }) =>
                  isActive
                    ? "py-[8px] border-primary-500 border-0 border-b-4"
                    : ""
                }
              >
                {content.navbar.faq}
              </NavLink>
            </div>
          </Menu.Item>

          <Menu.Item>
            <div className="h-[40px] mt-[12px] mb-[8px] py-[8px]">
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive
                    ? "py-[8px] border-primary-500 border-0 border-b-4"
                    : ""
                }
              >
                {content.navbar.about}
              </NavLink>
            </div>
          </Menu.Item>
        </div>

        <div className="body font-normal pt-[8px] pb-[16px]">
          {content.emailText}
        </div>
      </Menu.Items>
    </Menu>
  );
};
export default HamburgerMenu;
