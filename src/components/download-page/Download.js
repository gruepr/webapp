import content from "../../content/content";
import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import ChangeLog from "../change-log-page/ChangeLog";
import DownloadPageImage from "../../img/download-bg.svg";
import {NavLink, Route} from "react-router-dom";

const Download = () => {
  return (
    <div>
      <Header />
      <div
        className="grid grid-cols-3 
        tablet:p-[64px] tablet:pt-[56px] tablet:space-y-[32px] 
        mobile:p-[16px] mobile:py-[32px] mobile:space-y-[32px]"
      >
        <h2 className="col-span-3 heading2">{content.downloadPage.header}</h2>
        <div className="mobile:col-span-3 tablet:col-span-3 desktop:col-span-2 pt-[32px] space-y-[64px]">
          <div className="flex tablet:flex-row mobile:flex-col tablet:space-x-[4px]">
            <p className="body">{content.downloadPage.version}</p>

            <NavLink className="link text-primary-500" to="/ChangeLog">
            {content.downloadPage.changelog}
            </NavLink>
     
          </div>
          <div className="space-y-[24px]">
            <div className="flex flex-row items-center space-x-[12px]">
              <h3 className="heading3">{content.downloadPage.windows}</h3>
              <button className="primary-button">
                <a href="https://github.com/gruepr/gruepr/releases/latest/download/install_grueprV11.1.exe">
                  {content.downloadPage.downloadGruepr}
                </a>
              </button>
            </div>
            <p className="body">{content.downloadPage.windowsInstall}</p>
          </div>

          <div className="space-y-[24px]">
            <div className="flex flex-row items-center space-x-[12px]">
              <h3 className="heading3">{content.downloadPage.mac}</h3>
              <button className="primary-button">
                <a href="https://github.com/gruepr/gruepr/releases/latest/download/gruepr.dmg">
                  {content.downloadPage.downloadGruepr}
                </a>
              </button>
            </div>
            <p className="body">{content.downloadPage.macInstall}</p>
          </div>

          <div className="flex mobile:flex-col laptop:flex-row mobile:space-y-[12px] laptop:space-x-[12px] mobile:items-start laptop:items-center">
            <p className="body">{content.downloadPage.trySample}</p>
            <button className="secondary-button outline outline-neutral-500">
              <a
                href="https://github.com/gruepr/gruepr/blob/master/test_surveys/testdata.csv"
                target="_blank"
                rel="noreferrer"
              >
                {content.downloadPage.downloadData}
              </a>
            </button>
          </div>
        </div>
      </div>
      <img
        className="object-fill w-[100%]"
        src={DownloadPageImage}
        alt="download page"
      />
      <Footer />
    </div>
  );
};
export default Download;
