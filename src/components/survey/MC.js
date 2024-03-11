import content from "../../content/content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import React,{useState} from 'react';
import InputForm from "./InputForm";
import { gapi } from "gapi-script";
import { storedFormId } from './formutils';

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


const MC = () => {
  const [questions, setQuestions] = useState([]);
  const [optionsPlaceholder, setOptionsPlaceholder] = useState('Type your options...');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

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

  const handleQuestionChange = (index, newValue) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].question = newValue;

      // Update the selected question if it's the one being edited
      if (selectedQuestion && selectedQuestion.id === updatedQuestions[index].id) {
        setSelectedQuestion({ ...selectedQuestion, question: newValue });
      }

      return updatedQuestions;
    });
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
      Multiple Choice Questions
      </div>
      
      <div className="w-[43rem] h-[1.25rem] wrapper display-flex flex flex-col items-left justify-center
      px-4 py-5 gap-6 text-neutral-500 bg-accent-50 text-12 text-left font-regular dmsans">
      Unsure of what to ask? Take a look at some example questions!
      </div>

      <div class="grid grid-cols-2 gap-2">

      <div className="grid grid-cols-1 gap-4">
        {questions.map((question, index) => (
          <div className="grid grid-cols-2 w-[43rem] h-auto wrapper display-flex flex flex-col items-left justify-center px-4 py-5 gap-6 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans"
            key={question.id}
          >
            <h1 class="...">Question {question.id}</h1>
            {/* ... (delete button SVG) */}
            <button class="col-end-5"
              onClick={() => {handleDeleteQuestion(index); del();}}
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
                <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div className="display-flex flex flex-col gap-2">
              <p className="text-12 text-neutral-300">Question</p>
              <input
                type="text"
                value={question.question}
                placeholder="Type your question..."
                className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left"
                style={{ width: '648px', height: '48px' }}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                />
                
              
                <p className="text-12 text-neutral-300">Options</p>
                <select
                  value={question.options}
                  className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left dropdown-options"
                  style={{ width: '648px', height: '48px' }}
                  onChange={(e) => handleOptionsChange(index, e)}
                >
                  {['Expert, Intermediate, Beginner', 'Yes, No', 'High, Medium, Low', 'Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree'].map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                
                </select>
                <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="text-12 text-neutral-300 px-2 py-1">
    Customize Options
    </label>
</div>
              <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="text-12 text-neutral-300 px-2 py-1">
    Allow Students to select multiple options
    </label>
</div>
            </div>
          </div>
        ))}
 {/* Add your Questions button... */}
          <button
            type="button"
            className="w-[43rem] h-[1.25rem] wrapper display-flex items-center inline-flex px-4 py-5 gap-6 text-primary-500 bg-primary-50 text-light text-left font-regular dmsans"
            onClick={() => {handleAddQuestion(); execute();}}
          >
                  
          {/* Add your Questions button SVG code... */}
          <svg class="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          Add your Questions
            </button>
      </div>

{/* Preview Right Side */}

      <div className="wrapper display-flex flex flex-col items-center justify-center py-2 text-neutral-500 bg-neutral-50 text-light text-left font-regular dmsans">
          {/* Display each question preview */}
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="wrapper display-flex flex flex-col items-left justify-center py-5 text-neutral-500 text-light text-left font-regular dmsans"
            >
              <p className="text-12 text-neutral-300">Question</p>
              <span
                className="bg-white text-neutral-500 text-light py-3 px-4 text-left"
                style={{ width: '640px', height: '48px' }}
              >
                {`Q${question.id}: ${question.question}`}
              </span>
              <p className="text-12 text-neutral-300">Options: {question.options}</p>
            </div>
          ))} 
      </div>
      </div>


      <div className="flow-root items-center bg-transparent py-3">
<div class="float-right grid grid-cols-2">
<div>
<Link to="/Demo">
<button class=" float-right bg-transparent hover:bg-neutral-500 border border-neutral-500 hover:text-white text-base font-bold dmsans text-neutral-500 py-2 px-4 inline-flex items-center">
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 -ml-1 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
Previous Step
</button>
</Link>
</div>


<div>
<Link to="/Schedulingch">
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

export default MC;