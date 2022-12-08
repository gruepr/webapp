import content from "../../../content/content";

const Hero = () => {
  return (
    <div
      className="bg-hero-bg bg-cover bg-center flex flex-col items-center justify-center 
      laptop:space-y-[40px] laptop:py-[120px]
      mobile:py-[32px] mobile:space-y-[32px]"
    >
      <h1
        className="text-center scale-x laptop:heading1 
        laptop:px-12 laptop:w-[50rem]
        tablet:w-[40rem]
        mobile:mobile-heading mobile:px-[16px]"
      >
        {content.home.hero.header}
      </h1>
      <h3
        className="text-center scale-x heading3 
        laptop:px-12 laptop:w-[40rem]
        tablet:w-[40rem]
        mobile:px-[16px]"
      >
        {content.home.hero.text}
      </h3>
      <button className="secondary-button">
        <a href="">{content.home.hero.button}</a>
      </button>
    </div>
  );
};
export default Hero;
