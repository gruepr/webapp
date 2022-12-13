import content from "../../../content/content";
import survey from "../../../img/create-survey.svg";
import team from "../../../img/team-compatibility.svg";
import opensource from "../../../img/free-open-source.svg";

const Features = () => {
  return (
    <div class="bg-features-bg bg-cover bg-[top_left]">
      <div class="flex flex-col justify-center items-center">
        {/* Create custom surveys */}
        <div
          class="items-center grid grid-flow-row w-full 
          mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2
          laptop:p-20 laptop:gap-8
          mobile:px-[16px] mobile:py-[32px] mobile:gap-[32px]"
        >
          <img
            class="object-cover w-full"
            src={survey}
            alt="Gruepr screenshot of survey creation feature"
          />
          <div class="resize-x space-y-3">
            <h2 class="heading2">{content.home.features.createSurveyHeader}</h2>
            <p class="body">{content.home.features.createSurveyText}</p>
          </div>
        </div>
        {/* Maximize team compatibility */}
        <div
          class="items-center grid grid-flow-row w-full 
          mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2
          laptop:p-20 laptop:gap-8 
          mobile:px-[16px] mobile:py-[32px] mobile:gap-[32px]"
        >
          <img
            class="object-cover w-full laptop:order-last"
            src={team}
            alt="Gruepr screenshot of team creation screen"
          />
          <div class="resize-x space-y-3 laptop:order-first">
            <h2 class="heading2">
              {content.home.features.teamCompatibilityHeader}
            </h2>
            <p class="body">{content.home.features.teamCompatibilityText}</p>
          </div>
        </div>
        {/* Free and open source, always */}
        <div
          class="items-center grid grid-flow-row w-full 
          mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2
          laptop:p-20 laptop:gap-8 
          mobile:px-[16px] mobile:pt-[32px] mobile:pb-[64px] mobile:gap-[32px]"
        >
          <img
            class="object-cover w-full"
            src={opensource}
            alt="Gruepr screenshot of survey creation feature"
          />
          <div class="resize-x space-y-3">
            <h2 class="heading2">
              {content.home.features.freeOpenSourceHeader}
            </h2>
            <p class="body">{content.home.features.freeOpenSourceText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
