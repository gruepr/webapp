import content from "../../../content/content";

const Hero = () => {
  return (
    <div className="w-full h-[38.5rem] bg-hero-bg bg-center flex flex-col items-center justify-center gap-y-10">
      <h1 className="heading1 text-center ml-12 mr-12 lg:w-[50rem] scale-x">
        {content.home.hero.header}
      </h1>
      <h3 className="heading3 ml-12 mr-12 text-center lg:w-[40rem] scale-x">
        {content.home.hero.text}
      </h3>
      <button className="secondary-button">
        <a href="">{content.home.hero.button}</a>
      </button>
    </div>
  );
};
export default Hero;
