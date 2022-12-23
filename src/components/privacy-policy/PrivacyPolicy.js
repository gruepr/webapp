import content from "../../content/content";
import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import PrivacyImage from "../../img/privacypolicy-bg.svg";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div class="mx-16 mt-14">
        <h2 className="heading2 pb-8">{content.privacyPolicy.header}</h2>
        <p className="body pb-6">{content.privacyPolicy.beginningP1}</p>
        <p className="body pb-6">{content.privacyPolicy.beginningP2}</p>
        <p className="body pb-6">{content.privacyPolicy.beginningP3}</p>
        <p className="body pb-6">{content.privacyPolicy.beginningP4}</p>
        <p className="body pb-6">{content.privacyPolicy.beginningP5}</p>
        <p className="body pb-6">{content.privacyPolicy.beginningP6}</p>
        <p className="body font-bold">{content.privacyPolicy.securityHeader}</p>
        <p className="body pb-6"> {content.privacyPolicy.securityText} </p>
        <p className="body font-bold">
          {content.privacyPolicy.childrensPrivHeader}
        </p>
        <p className="body pb-6">{content.privacyPolicy.childrensPrivText}</p>
        <p className="body font-bold">{content.privacyPolicy.changesHeader}</p>
        <p className="body pb-6"> {content.privacyPolicy.changesText} </p>
        <p className="body font-bold">{content.privacyPolicy.contactHeader}</p>
        <p className="body pb-6"> {content.privacyPolicy.contactText} </p>
      </div>
      <img src={PrivacyImage} alt="privacy" />
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
