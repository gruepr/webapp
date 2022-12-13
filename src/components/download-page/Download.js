import content from "../../content/content";
import Header from "../header/Header";
import Footer from "../footer/Footer.js";

const Download = () => {
  return (
    <div>
      <Header />

      <div className="px-[64px] pt-[56px] space-y-[32px]">
        <h2 className="heading2">{content.downloadPage.header}</h2>
        <div>
          <h3 className="heading3">{content.downloadPage.windows}</h3>
          <h3 className="heading3">{content.downloadPage.mac}</h3>
          <button className="secondary-button">
            <a href="https://github.com/gruepr/gruepr/blob/master/test_surveys/testdata.csv">
              {content.downloadPage.trySample}
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Download;
