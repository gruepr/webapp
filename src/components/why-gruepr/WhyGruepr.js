import { CARD } from "./why-gruepr-card/constants";
import WhyGrueprCard from "./why-gruepr-card/WhyGrueprCard";

const WhyGruepr = () => {
  return (
    <div>
      <h2 class="heading2">Why choose Gruepr?</h2>
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
