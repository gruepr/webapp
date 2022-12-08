import joshImage from "../../img/josh.jpg";
import content from "../../content/content";

const AboutJosh = () => {
  return (
    <div className="laptop:bg-primary-50 laptop:py-10 laptop:px-20 tablet:bg-primary-50 mobile:p-4 mobile:bg-white">
      <div
        className="flex py-2 items-center 
      laptop:flex-row laptop:space-x-8
      mobile:flex-col mobile:space-x-0 mobile:space-y-3"
      >
        <img src={joshImage} className="h-[19rem] mobile:h-[18.75rem]" />
        <div className="flex flex-col space-y-2">
          <h2 class="heading2 laptop:text-left mobile:text-center">
            {content.aboutUs.backstory.header}
          </h2>
          <p class="body">{content.aboutUs.backstory.text}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutJosh;
