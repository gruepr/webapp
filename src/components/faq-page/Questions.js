import content from "../../content/content";
import Faq from "react-faq-component";
import data from "../faq-page/faq-section/data.js";

const Questions = () => {
  const styles = {
    bgColor: "transparent",
    rowTitleColor: "neutral-500",
    rowTitleTextSize: "16px",
    rowContentColor: "neutral-500",
    rowContentTextSize: "16px",
    rowContentPaddingTop: "16px",
    rowContentPaddingBottom: "16px",
  };

  return (
    <div>
      {/* The Legal Side was moved into the Privacy Policy page. */}
      {/* <div className="px-20 py-20">
        <h2 class="pt-20 pb-7 heading2">{content.faq.legal.header}</h2>
        <p class="body"> {content.faq.legal.text} </p>
      </div> */}

      <div className="px-[64px] py-[32px] mb-[56px]">
        <h2 class="heading2">FAQs</h2>
        <div className="body">
          <Faq styles={styles} data={data} />
        </div>
      </div>
    </div>
  );
};
export default Questions;
