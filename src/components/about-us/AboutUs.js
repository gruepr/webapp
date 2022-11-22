import { Link } from "react-router-dom";
import Header from "../header/Header"
import AboutJosh from "./AboutJosh";
import Footer from "../footer/Footer"


import Contact from "../about-us/Contact"



const AboutUs = () => {
  return (
    <div>
              <Header/>
              <AboutJosh/>
              <Contact/>
              <Footer/>

    
    </div>

  );




      <h1 class=" px-20 pb-5 text-3xl text-dark font-bold drop-shadow-lg dmsans ">
        {content.aboutUs.contact.header}
      </h1>
      <p class="px-20 text-dark">{content.aboutUs.contact.submitIssue}</p>
      <p class="px-20 text-dark">{content.aboutUs.contact.bugsOrImprove}</p>
      <Footer />
    </div>
  );
};
export default AboutUs;
