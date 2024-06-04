import content from "../../content/content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import React,{useState, useEffect, createContext} from 'react';
import InputForm from "./InputForm";
import { gapi } from "gapi-script";
import { storedFormId } from './formutils';
import { useData } from './context';
import { C_ID, A_KEY, SCOP } from './config';


const CLIENT_ID = {C_ID}
const API_KEY = {A_KEY}
const SCOPES = {SCOP}

const UserContext = createContext()

/* https://www.googleapis.com/auth/drive.file - Use this scope instead of the above one*/ 
function loadClient() {
  gapi.client.setApiKey(A_KEY);
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
              "title": "What is your Timezone?",
              "questionItem": {
                "question": {
                  "choiceQuestion": {
                    "type": "RADIO",
                    "options": [
                      {
                        "value": "EDT"
                      },
                      {
                        "value": "PDT"
                      },
                      {
                        "value": "IST"
                      },
                      {
                        "value": "MT"
                      },
                      {
                        "value": "GMT"
                      },
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
  gapi.auth2.init({client_id: C_ID});
});


const Schedulingch = () => {

  const CheckboxGroup = () => {
  
     return <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>;

  };

  const [questions, setQuestions] = useState([]);

  const [actButtons, setActButtons] = useState(Array(6).fill(false));

  const { activeButtons, setButtonActive } = useData();

  const handleButtonClick = (buttonIndex) => {
    setButtonActive(buttonIndex, !activeButtons[buttonIndex]);
    setActButtons((prevActButtons) =>
      prevActButtons.map((active, index) => {
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



  const handleOptionsChange = (index, event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map((option) => option.value);
  
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].options = selectedOptions;
      return updatedQuestions;
    });
  };

  return (
    <div className="bg-white flow-root items-center px-16 py-1">
      <Header />
      
      <div className=" w-full left-0 gap-4 items-center text-white text-2xl pb-2 bg-neutral-500 px-8 py-3">
      Scheduling Questions
      </div>
      
      <div className="w-auto h-[1.25rem] wrapper display-flex flex flex-col items-left justify-center
      px-4 py-5 gap-6 text-neutral-500 bg-accent-50 text-12 text-left font-regular dmsans">
      Unsure of what to ask? Take a look at some example questions!
      </div>

      <div class="grid grid-cols-2 gap-2">

      <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 w-auto h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans"
          >
            <h1 class="...">Timezone</h1>
            
            <button
              className={`col-end-6 bg-primary-50${
                actButtons[0] ? 'active' : ''
              }`}
            >
              <label class="inline-flex relative items-center cursor-pointer" >
              <input type="checkbox" value="" class="sr-only peer" onClick={() => {handleButtonClick(0); execute();}} />
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

<div className="display-flex flex flex-col gap-2">
<p className="text-12 text-neutral-300">Select Timezone</p>
                <select
                  className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left dropdown-options"
                  style={{ width: '648px', height: '48px' }}
                  onChange={() => handleOptionsChange()}
                >
                  {['ACST - Australian Central Standard Time', 'AEDT - Australian Eastern Daylight Time', 'AEST - Australian Eastern Standard Time', 'AKST - Alaska Standard Time', 'ART - Argentina Time', 'AT - Azores Time', 'AWST - Australian Western Standard Time', 'BRT - Brasília Time', 'BRST - Brasília Summer Time', 'BOT - Bolivia Time', 'CET - Central European Time', 'CHADT - Chatham Daylight Time', 'CHAST - Chatham Standard Time', 'ChST - Chamorro Standard Time', 'CLST - Chile Summer Time', 'CLT - Chile Standard Time', 'COT - Colombia Time', 'CST - Central Standard Time', 'Ecuador - Galápagos Time', 'EET - Eastern European Time', 'EST - Eastern Standard Time', 'FJT - Fiji Time', 'FJST - Fiji Summer Time', 'FKT - Falkland Islands Time', 'FKST - Falkland Islands Summer Time', 'GFT - French Guiana Time', 'GMT - Greenwich Mean Time', 'HST - Hawaii-Aleutian Standard Time', 'IST - Indian Standard Time', 'LINT - Line Islands Time', 'MHT - Marshall Islands Time', 'MSK - Moscow Standard Time', 'MST - Mountain Standard Time', 'NRT - Nauru Time', 'NDT - Newfoundland Daylight Time', 'NST - Newfoundland Standard Time', 'NZST - New Zealand Standard Time', 'PET - Peru Time', 'PMT - Pierre & Miquelon Standard Time', 'PONT - Pohnpei Standard Time', 'PST - Pacific Standard Time', 'PYT - Paraguay Time', 'PYST - Paraguay Summer Time', 'SBT - Solomon Islands Time', 'TOT - Tonga Time', 'TVT - Tuvalu Time', 'UTC - Coordinated Universal Time', 'UTC+12 - UTC+12', 'UTC+13 - UTC+13', 'UYT - Uruguay Time', 'UYST - Uruguay Summer Time', 'VUT - Vanuatu Time', 'WET - Western European Time'
].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                
                </select>
              
      </div>
</div>

<div className="grid grid-cols-2 w-auto h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans"
          >
            <h1 class="...">Schedule</h1>
              <button
              className={`col-end-6 bg-primary-50${
                actButtons[1] ? 'active' : ''
              }`}
            >
              <label class="inline-flex relative items-center cursor-pointer" >
              <input type="checkbox" value="" class="sr-only peer" onClick={() => {handleButtonClick(1); execute();}} />
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

<div className="display-flex flex flex-col gap-4">
  <div>
<p className="text-12 text-neutral-300">Select Days</p>
                <select
                  className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left dropdown-options"
                  style={{ width: '648px', height: '48px' }}
                  onChange={() => handleOptionsChange()}
                >
                  {['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                
                </select>
                </div>
                
                <div className="grid gap-x-8 gap-y-4 grid-cols-2">
                <div>

                
                <select
                  className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left dropdown-options"
                  style={{ width: 'Auto', height: '48px' }}
                  onChange={() => handleOptionsChange()}
                >
                  {['From'].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                
                </select>
                </div>

                <div>

                
                <select
                  className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left dropdown-options"
                  style={{ width:'Auto', height: '48px' }}
                  onChange={() => handleOptionsChange()}
                >
                  {['To'].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
                </div>

                </div>

                <div>
                <p className="text-12 text-neutral-300">Frequency</p>
                <select
                  className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left dropdown-options"
                  style={{ width:'648px', height: '48px' }}
                  onChange={() => handleOptionsChange()}
                >
                  {['Every 30 Minutes'].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
                </div>
              
      </div>
</div>
      </div>

{/* Preview Right Side */}

<div className="grid grid-cols-1 gap-4 h-auto">
<div className="wrapper display-flex flex flex-col items-center justify-center py-2 text-neutral-500 bg-neutral-50 text-light text-left font-regular dmsans">
          {/* Display each question preview */}

          {actButtons[0] && (
            <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Timezone</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
                What is your Preferred Timezone?
              </span>
            </div>
          )}
          {actButtons[1] && (
            <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Timezone</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "auto" }}>
                Schedule
              </span>
              <div class="grid grid-cols-6 gap-4" style={{ width: "640px" }}>
              <div> </div>
              <div>6:00 AM - 9:00 AM</div>
              <div>9:00 AM - 12:00 PM</div>
              <div>12:00 PM - 3:00 PM</div>
              <div>3:00 AM - 6:00 PM</div>
              <div>6:00 PM - 9:00 PM</div>
              <div>Monday</div>
              {[...Array(5)].map((_, index) => (
                <CheckboxGroup/>
              ))}
              <div>Tuesday</div>
              {[...Array(5)].map((_, index) => (
                <CheckboxGroup/>
              ))}
              <div>Wednesday</div>
              {[...Array(5)].map((_, index) => (
                <CheckboxGroup/>
              ))}
              <div>Thursday</div>
              {[...Array(5)].map((_, index) => (
                <CheckboxGroup/>
              ))}
              <div>Friday</div>
              {[...Array(5)].map((_, index) => (
                <CheckboxGroup/>
              ))}
              <div>Saturday</div>
              {[...Array(5)].map((_, index) => (
                <CheckboxGroup/>
              ))}
              <div>Sunday</div>
              {[...Array(5)].map((_, index) => (
                <CheckboxGroup/>
              ))}
            </div>
            </div>
          )}


      </div>
      
      </div>
      </div>

      
      <div className="flow-root items-center bg-transparent py-3">
<div class="float-right grid grid-cols-2">
<div>
<Link to="/MC">
<button class=" float-right bg-transparent hover:bg-neutral-500 border border-neutral-500 hover:text-white text-base font-bold dmsans text-neutral-500 py-2 px-4 inline-flex items-center">
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
Previous Step
</button>
</Link>
</div>


<div>
<Link to="/Courseinfo">
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

export default Schedulingch;
