import Logos from "../../../img/Logos.svg";
import content from "../../../content/content";

export const TrustedSchools = () => {
  return (
    <div className="bg-primary-50 laptop:p-12 laptop:space-y-8 tablet:p-12 mobile:p-[16px] mobile:space-y-[16px]">
      <h2 className="heading2 laptop:text-center tablet:text-center mobile:text-left">
        {content.home.trustedHeader}
      </h2>
      <img
        className="object-cover w-full"
        src={Logos}
        alt="School logos of The University of Tennessee, Santa Clara University, Rowan University, 
        Ohio State University, Georgetown University, University of California Irvine, Monash University, Indiana University Bloomington,
        Illinois State University, Newton South High School, City University of New York, Vin University, Regis College, 
        Northeastern University, Texas A&M University, Universidad del Magdalena, University of Connecticut, University of San Carlos,
        University of Houston, and Stockton University."
      />
    </div>
  );
};
export default TrustedSchools;
