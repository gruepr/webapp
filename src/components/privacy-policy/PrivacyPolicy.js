import content from "../../content/content";
import Header from "../header/Header";
import Footer from "../footer/Footer.js";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div class="mx-16">
        <h2 className="heading2 pb-8">{content.privacyPolicy.header}</h2>
        <p className="body">{content.privacyPolicy.beginning}</p>
        <p className="body font-bold pt-6">
          {content.privacyPolicy.linksHeader}
        </p>
        <p className="body"> {content.privacyPolicy.linksText} </p>
      </div>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
