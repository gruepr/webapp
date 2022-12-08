import Logos from "../../../img/Logos.svg";

export const TrustedSchools = () => {
  return (
    <div class="bg-primary-50 laptop:p-12 laptop:space-y-8 mobile:p-[16px] mobile:space-y-[16px]">
      <h2 class="heading2 laptop:text-center mobile:text-left">
        Trusted By 35+ Schools
      </h2>
      <img class="object-fill" src={Logos} alt="logos" />
    </div>
  );
};
export default TrustedSchools;
