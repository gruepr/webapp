import content from "../../content/content";

const PrivacyPolicy = () => {
  return (
    <div>
      <p className="body">{content.privacyPolicy.beginning}</p>
      <p className="body">{content.privacyPolicy.linksHeader}</p>
      <p className="body"> {content.privacyPolicy.linksText} </p>
    </div>
  );
};
export default PrivacyPolicy;
