import Footer from "../footer/Footer";
import Header from "../header/Header";
import Questions from "./Questions";
import Youtube from "./YouTube";
import content from "../../content/content";
import Faq from "react-faq-component";
import data from "../faq-page/faq-section/data.js"




const Faqs = () => {
  return (
    <div>
      <Header />
      <div class="bg-faq-bg">
        <h2 class="px-20 py-20 heading2">{content.faq.howGrueprWorks.header}</h2>
        <Youtube />
        
            <Faq
                data={data}
   
            />

        <Questions />
        <Footer />
      </div>
    </div>
  );
};
export default Faqs;
