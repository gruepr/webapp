import content from "../../content/content";
import DecorativeImage from "../../img/contact-bottom.svg";

const Contact = () => {
  return (
    <div className="laptop:bg-cover laptop:bg-contact-bg laptop:bg-[right_top_1rem] mobile:bg-contact-bg mobile:bg-cover mobile:bg-[right_top]">
      <div
        className="laptop:space-y-4 laptop:p-16 laptop:pb-8
        tablet:p-8
        mobile:space-y-3 mobile:p-3 mobile:pt-10"
      >
        <h2 class="heading2">{content.aboutUs.contact.header}</h2>
        <div className="laptop:space-y-4 mobile:space-y-5">
          <p class="body">{content.aboutUs.contact.submitIssue}</p>
          <button className="secondary-button outline outline-neutral-500">
            <a target="_blank" href="https://github.com/gruepr/gruepr/issues">
              {content.aboutUs.contact.issueTracker}
            </a>
          </button>
          <p class="body">{content.aboutUs.contact.bugsOrImprove}</p>
        </div>
      </div>
      <img
        class="object-cover w-full"
        src={DecorativeImage}
        alt="decorative image"
      />
    </div>
  );
};
export default Contact;
