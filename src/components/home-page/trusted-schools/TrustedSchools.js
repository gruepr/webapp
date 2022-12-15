import Logos from "../../../img/logos.svg";
import content from "../../../content/content";

export const TrustedSchools = () => {
  return (
    <div class="bg-primary-50 laptop:p-12 laptop:space-y-8 tablet:p-12 mobile:p-[16px] mobile:space-y-[16px]">
      <h2 class="heading2 laptop:text-center tablet:text-center mobile:text-left">
        {content.home.trustedHeader}
      </h2>
      <img class="object-cover w-full" src={Logos} alt="logos" />
    </div>
  );
};
export default TrustedSchools;
