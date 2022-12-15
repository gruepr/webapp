import Footer from "../footer/Footer";
import Header from "../header/Header";
import Questions from "./Questions";
import Youtube from "./YouTube";
import content from "../../content/content";
import FaqBG from "../../img/faq-bg.svg";

const Faqs = () => {
  return (
    <div>
      <Header />
      <div className="tablet:p-[64px] mobile:p-[16px]">
        <div className="tablet:mb-[64px] mobile:mb-[48px]">
          <h2 className="heading2">{content.faq.howGrueprWorks.header}</h2>
          <Youtube />
        </div>
        <Questions />
      </div>
      <img className="object-fill w-[100%]" src={FaqBG} />
      <Footer />
    </div>
  );
};
export default Faqs;
