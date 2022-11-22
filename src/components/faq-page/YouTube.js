import content from "../../content/content";

export const YouTube = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="px-20 ">
          <h1 class="py-5 text-1xl text-dark font-bold drop-shadow-lg dmsans ">
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
        <div className="px-20">
          <h1 class="py-5 text-1xl text-dark font-bold drop-shadow-lg dmsans ">
            {content.faq.howGrueprWorks.surveyMakerOverview}
          </h1>
          <iframe
            width="300"
            height="200"
            src="https://youtu.be/acS6Kj7gW2A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="px-20">
          <h1 class="py-5 text-1xl text-dark font-bold drop-shadow-lg dmsans ">
            {content.faq.howGrueprWorks.grueprOverview}
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
      </div>

      <div className="flex flex-row">
        <div>
          <div className="px-20">
            <h1 class="py-5 text-1xl text-dark font-bold drop-shadow-lg dmsans ">
              {content.faq.howGrueprWorks.surveyMakerAttributes}
            </h1>
            <iframe
              width="300"
              height="200"
              src="https://youtu.be/sfaKpslFSbE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="px-20">
            <h1 class="py-5 text-1xl text-dark font-bold drop-shadow-lg dmsans ">
              {content.faq.howGrueprWorks.surveyMakerTimezoneSched}
            </h1>
            <iframe
              width="300"
              height="200"
              src="https://youtu.be/kUMC3_nFA20"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default YouTube;
