import content from "../../content/content";

const Download = () => {
  return (
    <div className="">
      <h2 className="heading2">{content.downloadPage.header}</h2>
      <h3 className="heading3">{content.downloadPage.windowsInstall}</h3>
      <h3 className="heading3">{content.downloadPage.macInstall}</h3>
      <button className="secondary-button">
        <a href="">{content.home.hero.button}</a>
      </button>
    </div>
  );
};
export default Download;
