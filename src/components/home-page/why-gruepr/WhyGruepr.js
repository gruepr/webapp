import { CARD } from "./why-gruepr-card/constants";
import WhyGrueprCard from "./why-gruepr-card/WhyGrueprCard";
import content from "../../../content/content";

const WhyGruepr = () => {
  return (
    <div class="flex flex-col justify-center items-center m-16 space-y-8">
      <h2 class="heading2 text-center">{content.home.whyGruepr.header}</h2>
      <div class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {CARD.map((whygruepr) => (
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
