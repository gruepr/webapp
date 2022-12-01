import content from "../../content/content";

const Contact = () => {
  return (
    <div className="bg-contact-bg">
      <div className="space-y-4">
        <h2 class="heading2">{content.aboutUs.contact.header}</h2>
        <p class="body">{content.aboutUs.contact.submitIssue}</p>
        <button className="secondary-button outline outline-neutral-500">
          <a href="https://github.com/gruepr/gruepr-webapp/issues">
            {content.aboutUs.contact.issueTracker}
          </a>
        </button>

        <p class="body">{content.aboutUs.contact.bugsOrImprove}</p>
      </div>
    </div>
  );
};
export default Contact;
