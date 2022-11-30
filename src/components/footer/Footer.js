import { Link } from "react-router-dom";
import content from "../../content/content";

const Footer = () => {
  return (
    <div className="flow-root items-center bg-white px-16 py-1">
      <div className="float-left flex items-center h-20 space-x-10">
        <div className="text-2xl pb-2 paytone text-neutral-500">gruepr</div>
        <div className="text-base font-bold dmsans text-neutral-500 text-decoration-line: underline space-x-4">
          <Link to="/Faqs">{content.footer.howItWorks}</Link>
          <Link to="/Faqs">{content.footer.faq}</Link>
          {/* Make Survey function does not exist on the website yet */}
          {/* <Link to="/Faqs">{content.footer.makeSurvey}</Link> */}
          <Link to="/PrivacyPolicy">{content.footer.privacyPolicy}</Link>
        </div>
      </div>
      <div className="float-right flex items-center justify-center h-20 space-x-8">
        <div className="body">
          <a onClick={() => console.log("Home")}>
            <Link to="/Faqs">{content.emailText}</Link>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
