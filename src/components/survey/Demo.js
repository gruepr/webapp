import content from "../../content/content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import React,{useState} from 'react';
import { gapi } from "gapi-script";
import { useContext } from 'react';
import { storedFormId } from './formutils';
import { useData } from './context';

const Demo = () => {


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
      "requests": [
        {
          "createItem": {
            "location": {
              "index": 0
            },
            "item": {
              "title": "What is your Last Name",
              "questionItem": {
                "question": {
                  "textQuestion": {
                    "paragraph": false
                    
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


const [activeButtons, setActiveButtons] = useState(Array(6).fill(false));
const { setButtonActive } = useData();

const handleButtonClick = async (buttonIndex) => {
  setButtonActive(buttonIndex, !activeButtons[buttonIndex]);
  try {
    await loadClient();

    setActiveButtons((prevActiveButtons) =>
      prevActiveButtons.map((active, index) => {
        if (index === buttonIndex) {
          const newActive = !active;

          if (buttonIndex === 0 && newActive) {
            execute();
          } else if (buttonIndex === 1 && !newActive) {
            del();
          }

          return newActive;
        } else {
          return active;
        }
      })
    );
  } catch (error) {
    console.error("Error handling button click:", error);
  }
};

  return (
    
<div className="flow-root items-center bg-white px-16 py-1">
<Header />
<div className="grid grid-cols-1 gap-4">
<div className=" w-full left-0 items-center text-white text-2xl pb-2 bg-neutral-500 px-8 py-3">
  Demographic Questions
</div>
<div class="grid grid-cols-2 gap-2">
<div className="grid grid-cols-1 gap-4">
{/* <div class="grid grid-cols-2 gap-4"> */}

    <div className="grid grid-cols-2 w-[43rem] h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
    <h1 class="...">First Name*</h1>
<button
            className={`col-end-6 bg-primary-50 ${
              activeButtons[0] ? 'active' : ''
            }`}
            onClick={() => handleButtonClick(0)}
          >

</button>
</div>
<div className="grid grid-cols-2 w-[43rem] h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
          <h1 className="...">Last Name</h1>
          <button
            className={`col-end-6 bg-primary-50 ${
              activeButtons[1] ? 'active' : ''
            }`} 
          >
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={() => handleButtonClick(1)} />
              <div className="w-11 h-6 bg-neutral-300 rounded-full peer peer-focus:ring-primary-500 dark:peer-focus:ring-primary-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
          </button>

          <script>
            document.write(myFormid);
          </script>
</div>


<div className="grid grid-cols-2 w-[43rem]  h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
    <h1 class="...">Email</h1>

    <button
            className={`col-end-6 bg-primary-50 ${
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
</div>


<div className="grid grid-cols-2 w-[43rem]  h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
    <h1 class="...">Pronouns</h1>
    <button
            className={`col-end-6 bg-primary-50 ${
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
</div>

<div className="grid grid-cols-2 w-[43rem]  h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
    <h1 class="...">Race</h1>
    <button
            className={`col-end-6 bg-primary-50 ${
              activeButtons[4] ? 'active' : ''
            }`}
          >
  <label class="inline-flex relative items-center cursor-pointer" >
  <input type="checkbox" value="" class="sr-only peer" onClick={() => handleButtonClick(4)} />
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
</div>


<div className="grid grid-cols-2 w-[43rem]  h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-4 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">
    <h1 class="...">Timezone</h1>
    <button
            className={`col-end-6 bg-primary-50 ${
              activeButtons[5] ? 'active' : ''
            }`}
          >
  <label class="inline-flex relative items-center cursor-pointer" >
  <input type="checkbox" value="" class="sr-only peer" onClick={() => handleButtonClick(5)} />
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
</div>



{/* </div> */}
</div>

<div className="wrapper display-flex flex flex-col items-center justify-center py-2 text-neutral-500 bg-neutral-50 text-light text-left font-regular dmsans">

<div className="wrapper display-flex flex flex-col items-center justify-center 
py-2 text-neutral-500 bg-neutral-50 text-light text-left font-regular dmsans">
      {
        <div className="wrapper display-flex flex flex-col items-left justify-center 
    py-5 text-neutral-500 text-light text-left font-regular dmsans">
        <p className="text-12 text-neutral-300">First Name</p>
        <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left"  style={{width: "640px", height: "48px"}}>
      What is your First Name / Preferred Name?
    </span>
        </div> 
      }

</div>

{activeButtons[1] && (
  <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Last Name</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
                What is your Last Name?
              </span>
            </div>
          )}

{activeButtons[2] && (
  <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Email</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
                What is your Email Address?
              </span>
            </div>
    )}

{activeButtons[3] && (
<div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Pronouns</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
                What are your Preferred Pronouns?
              </span>
            </div>)
      }

{activeButtons[4] && (  
    <div className="wrapper display-flex flex flex-col items-left justify-center 
            py-5 text-neutral-500 text-light text-left font-regular dmsans">
              <p className="text-12 text-neutral-300">Race</p>
              <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
              How do you identify your race, ethnicity, or cultural heritage?
              </span>
            </div>
    )}

{activeButtons[5] && (    
    <div className="wrapper display-flex flex flex-col items-left justify-center 
    py-5 text-neutral-500 text-light text-left font-regular dmsans">
      <p className="text-12 text-neutral-300">Timezone</p>
      <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: "640px", height: "48px" }}>
      What time zone will you be based in during this class?
      </span>
    </div>
    
    )}
    </div>


</div>
</div>

<div className="flow-root items-center bg-transparent py-3">
<div class="float-right grid grid-cols-2">
<div>
<button class=" float-right bg-transparent hover:bg-neutral-500 border border-neutral-500 hover:text-white text-base font-bold dmsans text-neutral-500 py-2 px-4 inline-flex items-center">
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
Previous Step
</button>
</div>

<div>
<Link to="/MC">
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

export default Demo;

