import React, { useState } from "react";
import content from "../../content/content";

const Hero = () => {
  return (
    <body>
      <header className="w-full h-96 bg-home-hero-bg bg-cover bg-center flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-center text-5xl text-white font-bold drop-shadow-lg paytone ">
            {content.home.hero.header}
          </h1>
          <p class="mt-5 text-center text-lg text-dark  dmsans pt-4 pb-8">
            {content.home.hero.text}
          </p>
          <button className="bg-white py-4 px-8 text-base font-bold dmsans text-dark ">
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
