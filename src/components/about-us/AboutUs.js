import Footer from "../footer/Footer";
import Header from "../header/Header";
import content from "../../content/content";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <h1> {content.aboutUs.backstory.header}</h1>
      <p> {content.aboutUs.backstory.text}</p>

      <h1 class=" px-20 pb-5 text-3xl text-dark font-bold drop-shadow-lg dmsans ">
        {content.aboutUs.contact.header}
      </h1>
      <p class="px-20 text-dark">{content.aboutUs.contact.submitIssue}</p>
      <p class="px-20 text-dark">{content.aboutUs.contact.bugsOrImprove}</p>
      <Footer />
    </div>
  );
};
export default AboutUs;
