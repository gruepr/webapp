import joshImage from "../../img/josh.jpg";
import content from "../../content/content";

const AboutJosh = () => {
  return (
    <div className="bg-primary-50 py-10 ">
      <div className="content flex py-2">
        <img src={joshImage} className="h-[20rem] px-20 " />
        <h2 class="heading2">{content.aboutUs.backstory.header}</h2>
        <p class="body">{content.aboutUs.backstory.text}</p>
      </div>
    </div>
  );
};
export default AboutJosh;
