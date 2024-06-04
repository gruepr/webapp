import content from "../../content/content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import React,{useState, useEffect} from 'react';
import InputForm from "./InputForm";
import { gapi } from "gapi-script";
import { storedFormId } from './formutils';
import { useData } from './context';

const CLIENT_ID = "185862281568-2hgglps5jv8erpobb8hl9h1i5ikkdps1.apps.googleusercontent.com"
const API_KEY = "AIzaSyClDnIa2ktzsPMWAe5mImig1YBYfJFWgjA"
const SCOPES = "https://www.googleapis.com/auth/drive"
/* https://www.googleapis.com/auth/drive.file - Use this scope instead of the above one*/ 
function loadClient() {
  gapi.client.setApiKey("AIzaSyClDnIa2ktzsPMWAe5mImig1YBYfJFWgjA");
  return gapi.client.load("https://forms.googleapis.com/$discovery/rest?version=v1")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function del() {
  return gapi.client.request({
    method: 'POST',
    path: `https://forms.googleapis.com/v1/forms/${storedFormId}:batchUpdate`,
    "body": {
      "requests": [
          {
            "deleteItem": {
              "location": {
                "index": 0
              }
            }
          }
        ]
    }
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}

function execute() {
  return gapi.client.request({
    method: 'POST',
    path: `https://forms.googleapis.com/v1/forms/${storedFormId}:batchUpdate`,
    "body": {
      "requests":  [
        {
          "createItem": {
            "location": {
              "index": 0
            },
            "item": {
              "title": "What is your Availability?",
              "questionItem": {
                "question": {
                  "choiceQuestion": {
                    "type": "CHECKBOX",
                    "options": [
                      {
                        "value": "Monday"
                      },
                      {
                        "value": "Tuesday"
                      },
                      {
                        "value": "Wednesday"
                      },
                      {
                        "value": "Thursday"
                      },
                      {
                        "value": "Friday"
                      },
                      {
                        "value": "Saturday"
                      },
                      {
                        "value": "Sunday"
                      }
                    ]
                  }
                }
              }
              }
            }
          }
        ]
      
    }
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "185862281568-2hgglps5jv8erpobb8hl9h1i5ikkdps1.apps.googleusercontent.com"});
});


const Courseinfo = () => {
  const [questions, setQuestions] = useState([]);
  const [optionsPlaceholder, setOptionsPlaceholder] = useState('Type your options...');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [isButtonToggled, setIsButtonToggled] = useState(false);

  const [activeButtons, setActiveButtons] = useState(Array(6).fill(false));

  const { setButtonActive, setCourseInfoData } = useData();

  const handleButtonClick = (buttonIndex) => {
    setButtonActive(buttonIndex, !activeButtons[buttonIndex]);
    setActiveButtons((prevActiveButtons) =>
      prevActiveButtons.map((active, index) => {
        if (index === buttonIndex) {
          // Toggle the button's state
          const newActive = !active;
          // Execute or delete based on the new state
          if (newActive) {
            loadClient().then(execute);
          } else {
            loadClient().then(del);
          }
          return newActive;
        } else {
          return active;
        }
      })
    );
  };


  const handleAddQuestion = () => {
    const newQuestion = { id: questions.length + 1, question: '', options: [] };
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setSelectedQuestion(newQuestion);
  };

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(index, 1);

      // Update the ids of the remaining questions
      updatedQuestions.forEach((question, i) => {
        question.id = i + 1;
      });

      return updatedQuestions;
    });

    // Clear the selected question when deleted
    setSelectedQuestion(null);
  };



  const handleOptionsChange = (index, event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map((option) => option.value);
  
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].options = selectedOptions;
      return updatedQuestions;
    });
  };

  const [sections, setSections] = useState([{ id: 1, name: 'Section 1' }]);

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      name: `Section ${sections.length + 1}`,
    };
    setSections((prevSections) => [...prevSections, newSection]);
  };

  const deleteSection = (sectionId) => {
    setSections((prevSections) => prevSections.filter((section) => section.id !== sectionId));
  };

  return (
    <div className="bg-white flow-root items-center px-16 py-1">
      <Header />
      
      <div className=" w-full left-0 gap-4 items-center text-white text-2xl pb-2 bg-neutral-500 px-8 py-3">
      Course Questions
      </div>
      
      <div className="w-[43rem] h-[1.25rem] wrapper display-flex flex flex-col items-left justify-center
      px-4 py-5 gap-6 text-neutral-500 bg-accent-50 text-12 text-left font-regular dmsans">
      Unsure of what to ask? Take a look at some example questions!
      </div>

      <div class="grid grid-cols-2 gap-2">

      <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 w-[43rem] h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans"
          >
            <h1 class="...">Section</h1>
            
            <button
              className={`col-end-6 bg-primary-50${
                activeButtons[0] ? 'active' : ''
              }`}
            >
              <label class="inline-flex relative items-center cursor-pointer" >
              <input type="checkbox" value="" class="sr-only peer" onClick={() => handleButtonClick(0)} />
              <div class="w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-primary-500 
              dark:peer-focus:ring-primary-500 peer-checked:after:translate-x-full
              peer-checked:after:border-white after:content-[''] 
              after:absolute after:top-0.5 after:left-[2px] after:bg-white 
              after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
            </button>
            <script>
              document.write(myFormid)
            </script>


{sections.map((section) => (
        <div key={section.id} className="flex items-center col-span-3 gap-4">
          <div
            className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left dropdown-options"
            style={{ width: '448px', height: '48px' }}
          >
            {section.name}
          </div>
          <button className="display-flex inline-flex gap-2 text-left text-12" onClick={() => deleteSection(section.id)}>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            Delete Section
          </button>
        </div>
      ))}

      <div className="flex items-center col-start-1">
        <button
          type="button"
          className="wrapper display-flex items-center inline-flex gap-2 text-primary-500 bg-primary-50 text-light text-left font-regular dmsans"
          onClick={addSection}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          Add Section
        </button>
      </div>
                      
</div>


<div className="grid grid-cols-2 w-[43rem] h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-2 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans"
          >
            <p class="...">Classmates I want to work with</p>
              <button
              className={`col-end-6 bg-primary-50${
                activeButtons[1] ? 'active' : ''
              }`}
            >
              <label class="inline-flex relative items-center cursor-pointer" >
              <input type="checkbox" value="" class="sr-only peer" onClick={() => handleButtonClick(1)} />
              <div class="w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-primary-500 
              dark:peer-focus:ring-primary-500 peer-checked:after:translate-x-full
              peer-checked:after:border-white after:content-[''] 
              after:absolute after:top-0.5 after:left-[2px] after:bg-white 
              after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
            </button>
            <script>
              document.write(myFormid)
            </script>

            <p class="...">Classmates I want to avoid</p>
              <button
              className={`col-end-6 bg-primary-50${
                activeButtons[2] ? 'active' : ''
              }`}
            >
              <label class="inline-flex relative items-center cursor-pointer" >
              <input type="checkbox" value="" class="sr-only peer" onClick={() => handleButtonClick(2)} />
              <div class="w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-primary-500 
              dark:peer-focus:ring-primary-500 peer-checked:after:translate-x-full
              peer-checked:after:border-white after:content-[''] 
              after:absolute after:top-0.5 after:left-[2px] after:bg-white 
              after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
            </button>
            <script>
              document.write(myFormid)
            </script>
            
            <p class="...">Select from list of classmates</p>
              <button
              className={`col-end-6 bg-primary-50${
                activeButtons[3] ? 'active' : ''
              }`}
            >
              <label class="inline-flex relative items-center cursor-pointer" >
              <input type="checkbox" value="" class="sr-only peer" onClick={() => handleButtonClick(3)} />
              <div class="w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-primary-500 
              dark:peer-focus:ring-primary-500 peer-checked:after:translate-x-full
              peer-checked:after:border-white after:content-[''] 
              after:absolute after:top-0.5 after:left-[2px] after:bg-white 
              after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
            </button>
            <script>
              document.write(myFormid)
            </script>
            
            <div className="display-flex flex flex-col col-span-5 gap-6">
      <label className="text-12 text-neutral-300">
        You can upload a list of classmates that students can select names from rather than having a free response question
      </label>

      <button
        type="button"
        className="wrapper display-flex items-center inline-flex gap-2 text-primary-500 bg-primary-50 text-light text-left font-regular dmsans"
      >
        {/* Add your Questions button SVG code... */}
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        Upload class roster
      </button>
    </div>
              
</div>
      </div>

{/* Preview Right Side */}

<div className="wrapper display-flex flex flex-col items-center justify-center py-2 text-neutral-500 bg-neutral-50 text-light text-left font-regular dmsans">
          {/* Display each question preview */}

          {activeButtons[0] && (
            <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Timezone</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
                Which Sections are you enrolled in?
              </span>
              <p className="text-12 text-neutral-300">Options: Section 1, Section 2, Section 3.......</p>
            </div>
          )}
          {activeButtons[1] && (
            <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Question</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
              Classmates I want to work with
              </span>
            </div>
          )}
          {activeButtons[2] && (
            <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Question</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
              Classmates I want to avoid
              </span>
            </div>
          )}
          {activeButtons[3] && (
            <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Question</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
              Select from list of classmates
              </span>
            </div>
          )}


      </div>
      
      </div>

      
      <div className="flow-root items-center bg-transparent py-3">
<div class="float-right grid grid-cols-2">
<div>
<Link to="/Schedulingch">
<button class=" float-right bg-transparent hover:bg-neutral-500 border border-neutral-500 hover:text-white text-base font-bold dmsans text-neutral-500 py-2 px-4 inline-flex items-center">
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
Previous Step
</button>
</Link>
</div>


<div>
<Link to="/Preview">
<button class=" float-right bg-transparent hover:bg-neutral-500 border border-neutral-500 hover:text-white text-base font-bold dmsans text-neutral-500 py-2 px-4 inline-flex items-center">
Next Step
<svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</Link>
</div>
</div>
</div>
<Footer />        
</div>
    );  
};

export default Courseinfo;

