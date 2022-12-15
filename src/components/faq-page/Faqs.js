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
      <div>
        <h2 className="tablet:p-[64px] mobile:p-[16px] heading2">
          {content.faq.howGrueprWorks.header}
        </h2>
        <Youtube />
        <Questions />
        <img className="object-fill" src={FaqBG} />
        <Footer />
      </div>
    </div>
  );
};
export default Faqs;
