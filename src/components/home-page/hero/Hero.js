import React, { useState } from "react";
import content from "../../../content/content";

const Hero = () => {
  return (
    <body>
      <header className="w-full h-96 bg-home-hero-bg bg-cover bg-center flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class="heading1">{content.home.hero.header}</h1>
          <p class="heading3">{content.home.hero.text}</p>
          <button className="secondary-button">
            <a onClick={() => console.log("FAQs")}>
              {content.home.hero.button}
            </a>
          </button>
        </div>
      </header>
    </body>
  );
};
export default Hero;
