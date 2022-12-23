import Header from "../header/Header";
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
          <div className="col-span-3">
            <h3 className="col-span-3 heading3">{curr.header}</h3>
            <div>
              {curr.sections ? (
                <div className="">
                  {curr.sections.map((section) => (
                    <div className="py-[12px]">
                      <p className="body font-bold">{section.subhead}</p>
                      <ul className="body list-disc pl-[24px]">
                        {section.text.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="">
                  <ul className="body list-disc pl-[24px]">
                    {curr.text.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChangeLog;
