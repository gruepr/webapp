import content from "../../content/content";

export const YouTube = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="px-20 ">
          <h1 class="py-5 body font-bold">
            {content.faq.howGrueprWorks.appOverview}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/Ja-PF068tII"
            title="What is gruepr? video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="px-20">
          <h1 class="py-5 body font-bold">
            {content.faq.howGrueprWorks.surveyMakerOverview}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/acS6Kj7gW2A"
            title="SurveyMaker Overview video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="px-20">
          <h1 class="py-5 body font-bold">
            {content.faq.howGrueprWorks.grueprOverview}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/1ax-g0Ut1Ak"
            title="gruepr Overview video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="px-20">
          <h1 class="py-5 body font-bold">
            {content.faq.howGrueprWorks.surveyMakerAttributes}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/sfaKpslFSbE"
            title="SurveyMaker Attributes video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="px-20">
          <h1 class="py-5 body font-bold">
            {content.faq.howGrueprWorks.surveyMakerTimezoneSched}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/kUMC3_nFA20"
            title="SurveyMaker Timezone & Schedule video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default YouTube;
