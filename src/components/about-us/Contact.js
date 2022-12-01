import content from "../../content/content";

const Contact = () => {
  return (
    <div className="bg-contact-bg ">
      <div className="px-20">
        <h2 class="heading2">{content.aboutUs.contact.header}</h2>
        <p class="body">{content.aboutUs.contact.submitIssue}</p>
        <a
          className="secondary-button outline outline-neutral-500"
          href="https://github.com/gruepr/gruepr-webapp/issues"
        >
          {content.aboutUs.contact.issueTracker}
        </a>

        <p class=" py-10 text-gray-700 text-base dmsans dark">
          If you find bugs or have ideas about how to improve gruepr, please
          contact Joshua Hertz at info@gruepr.com.{" "}
        </p>
      </div>
    </div>
  );
};
export default Contact;
