import React, { useState } from "react";
import heroBg from './hero-bg.svg'

const Hero = () => {
    return (
        <div className="bg-gray-50 pb-12 overflow-y-hidden" src={heroBg} style={{ minHeight: 700 }}>
            <div className="text-3xl pb-2 paytone text-dark">Sort your students into the most optimal groups</div>
            <div className="text-1xl pb-2 dmsans text-dark">Use our survey maker to collect information from your students, upload to gruepr, and our algorithm will find you the best set of teams.</div>
            <button className="bg-dark py-4 px-8 text-base font-bold dmsans text-white">
                <a onClick={() => console.log("FAQs")}>Download</a>
            </button>
            <img src={heroBg} />
        </div>


    )
}
export default Hero
