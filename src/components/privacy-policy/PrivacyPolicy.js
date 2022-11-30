import content from "../../content/content";

const PrivacyPolicy = () => {
  return (
    <div>
      <p class=" px-20 py-20 text-3xl text-dark font-bold drop-shadow-lg dmsans ">
        {content.privacyPolicy.beginning}
      </p>
      <p class=" px-20 pt-20 pb-7 text-3xl text-dark font-bold drop-shadow-lg dmsans ">
        {content.privacyPolicy.linksHeader}
      </p>
      <p class="px-20  text-dark"> {content.privacyPolicy.linksText} </p>
    </div>
  );
};
export default PrivacyPolicy;
