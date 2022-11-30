import content from "../../content/content";
import Header from "../header/Header";
import Footer from "../footer/Footer.js";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div>
        <p className="body">{content.privacyPolicy.beginning}</p>
        <p className="body">{content.privacyPolicy.linksHeader}</p>
        <p className="body"> {content.privacyPolicy.linksText} </p>
      </div>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
