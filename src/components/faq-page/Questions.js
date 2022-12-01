import content from "../../content/content";

const Questions = () => {
  return (
    <div>
     
      <h1 class=" px-20 pt-20 pb-7 text-3xl text-dark font-bold drop-shadow-lg dmsans ">
        {content.faq.legal.header}
      </h1>
      <p class="px-20  text-dark"> {content.faq.legal.text} </p>
    </div>
  );
};
export default Questions;
