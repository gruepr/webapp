import Header from "../header/Header";
import { NavLink } from "react-router-dom";
import changeLog from "../../content/change-log-content";

const ChangeLog = () => {
  return (
    <div>
      <Header />
      <div
        className="grid grid-cols-3 
        tablet:p-[64px] tablet:pt-[56px] tablet:space-y-[32px] 
        mobile:p-[16px] mobile:py-[32px] mobile:space-y-[32px]"
      >
        <h2 className="col-span-3 heading2">Change Log</h2>
        <p className="body">Updated 2022-06-07</p>
        
          {changeLog.map((curr) => (
             <h2 className="col-span-3 heading3">
             {curr.header}
             <p className="body">{curr.text}</p>

           </h2>))}
    
      </div>
    </div>
  );
};
export default ChangeLog;
