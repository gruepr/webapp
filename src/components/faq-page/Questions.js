import content from "../../content/content";
import Faq from "react-faq-component";
import data from "../faq-page/faq-section/data.js";

const Questions = () => {



  return (

    <div class="px-20">
     
      <h1 class="pt-20 pb-7 text-3xl text-dark font-bold drop-shadow-lg dmsans ">
        {content.faq.legal.header}
      </h1>
      <p class=" text-dark"> {content.faq.legal.text} </p>

      <h1 class="pt-20 pb-7 text-3xl text-dark font-bold drop-shadow-lg dmsans ">
        FAQs
      </h1>


    <Faq data={data}                 
/>

    </div>
  );
};
export default Questions;


