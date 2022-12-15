import content from "../../content/content";

export const YouTube = () => {
  return (
    <div>
      <div
        className="flex items-center 
        tablet:flex-row  tablet:space-x-[64px]
        mobile:flex-col mobile:space-y-[20px] mobile:mb-[20px]"
      >
        <div>
          <h1 class="py-[20px] body font-bold">
            {content.faq.howGrueprWorks.appOverview}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/Ja-PF068tII"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h1 class="py-[20px] body font-bold">
            {content.faq.howGrueprWorks.surveyMakerOverview}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/acS6Kj7gW2A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h1 class="py-[20px] body font-bold">
            {content.faq.howGrueprWorks.grueprOverview}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/1ax-g0Ut1Ak"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        className="flex items-center 
        tablet:flex-row  tablet:space-x-[64px]
        mobile:flex-col mobile:space-y-[20px]"
      >
        <div>
          <h1 class="py-[20px] body font-bold">
            {content.faq.howGrueprWorks.surveyMakerAttributes}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/sfaKpslFSbE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h1 class="py-[20px] body font-bold">
            {content.faq.howGrueprWorks.surveyMakerTimezoneSched}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/kUMC3_nFA20"
            title="YouTube video player"
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
