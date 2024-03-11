import Footer from "../footer/Footer";
import Header from "../header/Header";
import content from "../../content/content";
import InputForm from "./InputForm";
import { useEffect } from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import { Link } from "react-router-dom";
import Demo from "./Demo";
import { gapi } from "gapi-script";
import React,{useState} from 'react';
import { getValue } from "@testing-library/user-event/dist/utils";
import { handleFormId } from './formutils';


const CLIENT_ID = "185862281568-2hgglps5jv8erpobb8hl9h1i5ikkdps1.apps.googleusercontent.com"
const API_KEY = "AIzaSyClDnIa2ktzsPMWAe5mImig1YBYfJFWgjA"
const SCOPES = "https://www.googleapis.com/auth/drive"

function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/forms.body"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}

function loadClient() {
  gapi.client.setApiKey("AIzaSyClDnIa2ktzsPMWAe5mImig1YBYfJFWgjA");
  return gapi.client.load("https://forms.googleapis.com/$discovery/rest?version=v1")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}


// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {

  return gapi.client.forms.forms.create({
    "resource": {
      "info": {
        "title": document.getElementById("formname").value,
        "documentTitle": "First Title"
      }
    }
  })
      .then(function(response) {

              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
              const newFormId = response.result.formId;
              console.log("Form ID", newFormId);
              handleFormId(newFormId);
            },
            function(err) { console.error("Execute error", err); });
}

gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "185862281568-2hgglps5jv8erpobb8hl9h1i5ikkdps1.apps.googleusercontent.com"});
});


function SurveyUI() {



/*  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
  };

  gapi.load('client:auth2', start);
});

/*function createFile(tag) {
  var accessToken = gapi.auth.getToken().access_token;

  fetch('https://forms.googleapis.com/v1/forms', {
    method: "POST",
    headers: new Headers({ 'Authorization': 'Bearer ' + accessToken}),
    body: JSON.stringify({
      info: {
           title: document.getElementById("formname").value
       }
       
  })

  }).then( (res) => {
    return res.json();
  }).then( function(val) {
  console.log(val);
  console.log(val.formId);
    
  fetch('https://forms.googleapis.com/v1/forms/{val.formId}:batchUpdate', {
    method: "POST",
    headers: new Headers({ 'Authorization': 'Bearer ' + accessToken}),
    body: JSON.stringify({
      requests: [
        {
          createItem: {
            item: {
              "description": "GG"
            },
            location: {
              "index": 0
            }
          }
        }
      ]
       
  })

  }).then( (res) => {
    return res.json();
  }).then( function(val) {
  console.log(val);
  console.log(val.documentId);
    

});

});




}


/*function updateFile(tag) {
  var accessToken = gapi.auth.getToken().access_token;

  fetch('https://forms.googleapis.com/v1/forms/{val.formId}:batchUpdate', {
    method: "POST",
    headers: new Headers({ 'Authorization': 'Bearer ' + accessToken}),
    body: JSON.stringify({
      info: {
           description: 'This is my description'
       }
       
  })

  }).then( (res) => {
    return res.json();
  }).then( function(val) {
  console.log(val);
  console.log(val.documentId);
  });

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 mr-2"> 
        <path fillRule="evenodd" 
        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
        </svg>
        <input type="submit" value={content.surveyHome.sd.button}  style={{width: "640px", height: "18px"}}/>
   
        
}*/

  return (
      
        <div>
      <Header />
        <div className=" py-6 max-w-ful max-h-full bg-sh-bg bg-center flex flex-col items-center gap-y-10">
        <h1 className="heading1 text-center ml-12 mr-12 lg:w-[50rem] scale-x ">
        {content.surveyHome.sd.header}
      </h1>
      <h3 className="heading3 ml-12 mr-12 text-center text-white lg:w-[40rem] scale-x">
        {content.surveyHome.sd.text}
      </h3>
    </div>
    
    <div className="bg-white py-10 ">

<div className="wrapper display-flex flex flex-col items-center justify-center">
    
<form> 
<label>
    <h1 class=" py-10 text-neutral-300 text-light text-left font-regular dmsans  ">
           Survey Name*
           <br>
           </br>
           <div class="border-y-neutral-100 border-solid border-2 text-neutral-500">
            <input type="text" id="formname" name="name" placeholder="Enter Text" style={{width:"640px", height:"48px"}}/>
            </div>
            This will be the name of the survey you send to your students!
            </h1>
            
            </label>
            
        <Link to="/Demo"> 
        <button className="primary-button bg-primary-500 inline-flex items-center" onClick={() => execute()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 mr-2"> 
        <path fillRule="evenodd" 
        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
        </svg>
        <input type="submit" value={content.surveyHome.sd.button}  style={{width: "640px", height: "18px"}}/></button>
        </Link>
        </form>
        
</div>
</div>

    <button className="primary-button bg-primary-500 inline-flex items-center" onClick={() => authenticate().then(loadClient)}> Authorize </button>
    <Footer />

        </div>
        
    );
};
export default SurveyUI;