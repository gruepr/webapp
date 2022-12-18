import { CARD } from "./why-gruepr-card/constants";
import WhyGrueprCard from "./why-gruepr-card/WhyGrueprCard";
import content from "../../../content/content";

const WhyGruepr = () => {
  return (
    <div
      className="flex flex-col justify-center items-center 
      laptop:p-16 laptop:space-y-8
      tablet:p-12
      mobile:px-[16px] mobile:py-[32px] mobile:space-y-[32px]"
    >
      <h2 className="heading2 text-center">{content.home.whyGruepr.header}</h2>
      <div
        className="grid grid-flow-row mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-3
        laptop:gap-8
        mobile:gap-[32px]"
      >
        {CARD.map((whygruepr) => (
          <WhyGrueprCard
            img={whygruepr.img}
            header={whygruepr.header}
            info={whygruepr.info}
            alt={whygruepr.alt}
          />
        ))}
      </div>
    </div>
  );
};
export default WhyGruepr;
