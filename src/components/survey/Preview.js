import React from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useState, createContext, useContext } from "react";


const Preview = () => (
  
  <div class="grid grid-cols-1 gap-4">
<div className="bg-white flow-root items-center px-16 py-1">
      <Header />
      <div class="grid grid-cols-1 gap-4">
      <div className=" w-full left-0 gap-4 items-center text-white text-2xl pb-2 bg-neutral-500 px-8 py-3">
      Preview
      </div>

      
      
    <div className="grid grid-cols-1 w-auto h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
    <h1 class="...">Survey Name</h1>
    <div className="wrapper display-flex flex flex-col items-left justify-center py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">First Name</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "auto", height: "48px" }}>
                What is your Last Name?
              </span>
            </div>
    </div>
    <div className="grid grid-cols-2 w-auto h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
    <h1 class="...">Demographic Questions</h1>
    </div>
</div>
</div>
</div>

  );
  
  export default Preview;