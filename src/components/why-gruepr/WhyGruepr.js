import { CARD } from "./why-gruepr-card/constants";
import WhyGrueprCard from "./why-gruepr-card/WhyGrueprCard";

const WhyGruepr = () => {
    return (
        <div>
            <h1 class=" text-center text-3xl text-dark font-bold drop-shadow-lg dmsans pt-10">Why choose Gruepr?</h1>
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

    )

}
export default WhyGruepr;

