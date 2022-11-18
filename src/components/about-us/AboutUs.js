import Footer from "../footer/Footer";
import Header from "../header/Header";
import content from "../../content/content";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <h1> {content.aboutUs.backstory.header}</h1>
      <p> {content.aboutUs.backstory.text}</p>
      <h1> {content.aboutUs.contact.header}</h1>
      <p> {content.aboutUs.contact.submitIssue}</p>
      <p> {content.aboutUs.contact.bugsOrImprove}</p>
      <Footer />
    </div>
  );
};
export default AboutUs;
