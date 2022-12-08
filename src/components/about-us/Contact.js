import content from "../../content/content";
import DecorativeImage from "../../img/contact-bottom.svg";

const Contact = () => {
  return (
    <div className="bg-contact-bg bg-[center_top_1rem]">
      <div className="space-y-4 p-16 pb-8">
        <h2 class="heading2">{content.aboutUs.contact.header}</h2>
        <p class="body">{content.aboutUs.contact.submitIssue}</p>
        <button className="secondary-button outline outline-neutral-500">
          <a target="_blank" href="https://github.com/gruepr/gruepr/issues">
            {content.aboutUs.contact.issueTracker}
          </a>
        </button>
        <p class="body">{content.aboutUs.contact.bugsOrImprove}</p>
      </div>
      <img src={DecorativeImage} alt="decorative image" />
    </div>
  );
};
export default Contact;
