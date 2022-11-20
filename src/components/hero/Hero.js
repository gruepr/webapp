import React, { useState } from "react";

const Hero = () => {
  return (
    <body>
      <header className="w-full h-96 bg-home-hero-bg bg-cover bg-center flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class="heading1">
            Sort your students into the most optimal groups
          </h1>
          <p class="heading3">
            Use our survey maker to collect information from your students,
            upload to gruepr, and our algorithm will find you the best set of
            teams.
          </p>
          <button className="bg-white py-4 px-8 button-text">
            <a onClick={() => console.log("FAQs")}>Download Gruepr</a>
          </button>
        </div>
      </header>
    </body>
  );
};
export default Hero;
