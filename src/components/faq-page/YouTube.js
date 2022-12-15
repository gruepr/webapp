import content from "../../content/content";

export const YouTube = () => {
  return (
    <div>
      <div
        className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3
        mobile:place-items-center mobile:gap-y-[20px]
        tablet:place-items-start tablet:gap-x-[24px]
        desktop:px-[112px]"
      >
        <div>
          <p class="py-[20px] body font-bold">
            {content.faq.howGrueprWorks.appOverview}
          </p>
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
