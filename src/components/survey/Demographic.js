import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import React,{useState} from 'react';
import { gapi } from "gapi-script";
import { useContext } from 'react';
import { storedFormId } from './formutils';


const Demographic = () => {
  const [buttonStates, setButtonStates] = useState(Array(6).fill(false));
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleButtonClick = (index) => {
    setButtonStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );

    // Set the selected question index
    setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
  };

  const questions = [
    "First Name*",
    "Last Name",
    "Email",
    "Pronouns",
    "Race",
    "Timezone",
  ];

  return (
    <div className="flow-root items-center bg-white px-16 py-1">
      <Header />
      <div className="grid grid-cols-1 gap-4">
        <div className="w-full left-0 items-center text-white text-2xl pb-2 bg-neutral-500 px-8 py-3">
          Demographic Questions
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-1 gap-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 w-[43rem] h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans ${
                  buttonStates[index] ? "selected" : ""
                }`}
              >
                <h1 className="...">{question}</h1>
                <button
                  className={`col-end-6 bg-primary-50 ${
                    buttonStates[index] ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick(index)}
                >
              <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-primary-500 dark:peer-focus:ring-primary-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
                </button>
              </div>
            ))}
          </div>

          {/* Display Right Side */}
          <div className="wrapper display-flex flex flex-col items-center justify-center py-2 text-neutral-500 bg-neutral-50 text-light text-left font-regular dmsans">
            {selectedQuestionIndex !== null && (
              <div
                className="wrapper display-flex flex flex-col items-left justify-center py-5 text-neutral-500 text-light text-left font-regular dmsans"
                key={selectedQuestionIndex}
              >
                <p className="text-12 text-neutral-300">Question</p>
                <span
                  className="bg-white text-neutral-500 text-light py-3 px-4 text-left"
                  style={{ width: "640px", height: "48px" }}
                >
                  {questions[selectedQuestionIndex]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flow-root items-center bg-transparent px-16 py-3">
        <div className="float-right grid grid-cols-2">
          <div>
            <Link to="/Demo">
              <button className=" float-right bg-transparent hover:bg-neutral-500 border border-neutral-500 hover:text-white text-base font-bold dmsans text-neutral-500 py-2 px-4 inline-flex items-center">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="mr-2 -ml-1 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Previous Step
              </button>
            </Link>
          </div>

          <div>
            <Link to="/Schedulingch">
              <button className=" float-right bg-transparent hover:bg-neutral-500 border border-neutral-500 hover:text-white text-base font-bold dmsans text-neutral-500 py-2 px-4 inline-flex items-center">
                Next Step
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Demographic;