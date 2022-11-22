import React, { useState } from "react";
import content from "../../content/content";

const Hero = () => {
  return (
    <body>
      <div className="w-full h-[38.5rem] bg-home-hero-bg bg-cover bg-center flex flex-col items-center justify-center gap-y-10">
        <h1 className="heading1 w-[50rem]">{content.home.hero.header}</h1>
        <p className="heading3 text-center w-[40rem]">
          {content.home.hero.text}
        </p>
        <button className="secondary-button">
          <a onClick={() => console.log("FAQs")}>{content.home.hero.button}</a>
        </button>
      </div>
    </body>
  );
};
export default Hero;
