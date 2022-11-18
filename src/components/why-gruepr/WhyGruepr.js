import { CARD } from "./why-gruepr-card/constants";
import WhyGrueprCard from "./why-gruepr-card/WhyGrueprCard";
import content from "../../content/content";

const WhyGruepr = () => {
  return (
    <div>
      <h1 class=" text-center text-3xl text-dark font-bold drop-shadow-lg dmsans pt-10">
        {content.home.whyGruepr.header}
      </h1>
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
