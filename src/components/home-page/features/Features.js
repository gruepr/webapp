import content from "../../../content/content";
import survey from "../../../img/create-survey.svg";
import team from "../../../img/team-compatibility.svg";
import opensource from "../../../img/free-open-source.svg";

const Features = () => {
  return (
    <div class="bg-features-bg">
      <div class="flex flex-col justify-center items-center ml-16 mr-16">
        <div class="mt-20 mb-20 space-x-8 items-center grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div class="object-scale-down">
            <img
              src={survey}
              alt="Gruepr screenshot of survey creation feature"
            />
          </div>
          <div class="resize-x space-y-3">
            <h2 class="heading2">{content.home.features.createSurveyHeader}</h2>
            <p class="body">{content.home.features.createSurveyText}</p>
          </div>
        </div>
        <div class="mt-20 mb-20 space-x-8 items-center grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div class="resize-x space-y-3">
            <h2 class="heading2">
              {content.home.features.teamCompatibilityHeader}
            </h2>
            <p class="body">{content.home.features.teamCompatibilityText}</p>
          </div>
          <div class="object-scale-down">
            <img src={team} alt="Gruepr screenshot of team creation screen" />
          </div>
        </div>
        <div class="mt-20 mb-20 space-x-8 items-center grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div class="object-scale-down">
            <img
              src={opensource}
              alt="Image representing open source concept"
            />
          </div>
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
