import { CARD } from "./why-gruepr-card/constants";
import WhyGrueprCard from "./why-gruepr-card/WhyGrueprCard";
import content from "../../../content/content";

const WhyGruepr = () => {
  return (
    <div>
      <h2 class="heading2 text-center">{content.home.whyGruepr.header}</h2>
      <div class=" ">
        {CARD.map((whygruepr, index) => (
          <WhyGrueprCard
            img={whygruepr.img}
            header={whygruepr.header}
            info={whygruepr.info}
          />
        ))}
      </div>
    </div>
  );
};
export default WhyGruepr;
