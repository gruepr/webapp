import React, { useState } from "react";
import content from "../../../content/content";

const Hero = () => {
  return (
    <div className="w-full h-[38.5rem] bg-hero-bg bg-center flex flex-col items-center justify-center gap-y-10">
      <h1 className="heading1 w-[50rem]">{content.home.hero.header}</h1>
      <h3 className="heading3 text-center w-[40rem]">
        {content.home.hero.text}
      </h3>
      <button className="secondary-button">
        <a onClick={() => console.log("FAQs")}>{content.home.hero.button}</a>
      </button>
    </div>
  );
};
export default Hero;
