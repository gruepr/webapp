import { CARD } from "./why-gruepr-card/constants";
import WhyGrueprCard from "./why-gruepr-card/WhyGrueprCard";

const WhyGruepr = () => {
    return (
        <div>
            <row>
                <h1>Why Gruepr</h1>
          {CARD.map((whygruepr, index) => (
                <WhyGrueprCard
                img={whygruepr.img}
                header={whygruepr.header}
                info={whygruepr.info}
              />
          ))}
          </row>

        </div>

    )

}
export default WhyGruepr;

