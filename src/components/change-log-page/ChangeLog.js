import Header from "../header/Header";
import content from "../../content/content";
import { NavLink } from "react-router-dom";

const ChangeLog = () => {
  return (
    <div>
      <Header />
      <div
        className="grid grid-cols-3 
        tablet:p-[64px] tablet:pt-[56px] tablet:space-y-[32px] 
        mobile:p-[16px] mobile:py-[32px] mobile:space-y-[32px]"
      >
        <h2 className="col-span-3 heading2">{content.changeLog.title.header}</h2>

        <h3 className="col-span-3 heading2">{content.changeLog.title.header}</h3>


      </div>
    </div>
  );
};
export default ChangeLog;
