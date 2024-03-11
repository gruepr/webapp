import content from "../../content/content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import React,{useState} from 'react';
import InputForm from "./InputForm";
import { storedFormId } from './formutils';




const Multichoice = () => {

  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  const [show2,setShow2]=useState(false);
  const [show3,setShow3]=useState(false);
  const [show4,setShow4]=useState(false);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([
    {
      questionNumber: questionNumber,
      questionText: 'What is your experience with R Studio?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
    },
  ]);

  const [dropdownStates, setDropdownStates] = useState(Array.from({ length: questions.length }, () => false));
  const [previewStates, setPreviewStates] = useState(Array.from({ length: questions.length }, () => true));


  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { questionNumber: questionNumber + 1, questionText: '', options: options.slice() },
    ]);

    setQuestionNumber((prevNumber) => prevNumber + 1);
    setDropdownStates((prevStates) => [...prevStates, false]);
    setPreviewStates((prevStates) => [...prevStates, true]); // Add preview state for the new question
    
  };

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.filter((question, i) => i !== index);
      return updatedQuestions;
    });

    setDropdownStates((prevStates) => {
      const updatedStates = prevStates.filter((state, i) => i !== index);
      return updatedStates;
    });

    setPreviewStates((prevStates) => {
      const updatedStates = prevStates.filter((state, i) => i !== index);
      return updatedStates;
    });
  };
  const handleOptionChange = (questionId, optionIndex, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === questionId) {
          question.options[optionIndex] = value;
        }
        return question;
      })
    );
  };

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !prevStates[index];
  
      // Update the preview state to match the dropdown state
      setPreviewStates((prevPreviewStates) => {
        const updatedPreviewStates = [...prevPreviewStates];
        updatedPreviewStates[index] = updatedStates[index];
        return updatedPreviewStates;
    });
    return updatedStates;
  });
  };


return (
    
<div className="bg-white flow-root items-center px-16 py-1">
  
<Header />
<div className=" w-full left-0 items-center text-white text-2xl pb-2 bg-neutral-500 px-8 py-3">
  Multiple Choice Questions
</div>
<div class="grid grid-cols-2 gap-4">
    <div className="wrapper display-flex flex flex-col items-left justify-center 
py-10 space-y-4">

<div className="w-[43rem] h-[1.25rem] wrapper display-flex flex flex-col items-left justify-center
px-4 py-5 gap-6 text-neutral-500 bg-accent-50 text-12 text-left font-regular dmsans">
Unsure of what to ask? Take a look at some example questions!
</div>

<div className="w-[43rem] h-auto wrapper display-flex flex flex-col items-left 
px-4 py-5 gap-6 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans">

<h1>Question 2</h1>

<div className="display-flex flex flex-col gap-2">
<p className="text-12 text-neutral-300">Question</p>

<div className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left" onClick={()=>setShow1(!show1)}>
<input type="text" id="fname" name="input" placeholder="Type your questions..."/>
</div>

<p className="text-12 text-neutral-300">Question</p>
<span className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left"  style={{width: "648px", height: "48px"}}>
      Choose an Option
</span>

<div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="text-12 text-neutral-300 px-2 py-1">
    Allow Students to select multiple options
    </label>
</div>
</div>
</div>


{questions.map((question, index) => (

<div key={question.id} className="w-[43rem] h-auto wrapper display-flex flex flex-col items-left 
px-4 py-5 gap-6 text-neutral-500 bg-primary-50 text-light text-left font-regular dmsans grid grid-cols-1 gap-4">


<button onClick={()=>handleDeleteQuestion(index)}>
<svg class="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>


<h1>Question {question.questionNumber}</h1>
            <div className="display-flex flex flex-col gap-2">
              <p className="text-12 text-neutral-300">Question</p>
              <span className="bg-white text-neutral-500 items-center text-light py-3 px-4 text-left" style={{ width: "648px", height: "48px" }}>
                {question.question || 'Type your question...'}
              </span>

<p className="text-12 text-neutral-300">Response Type</p>

<div className="dropdown">
            <div
              className={`select ${dropdownStates[index] ? 'select-clicked' : ''}`}
              onClick={() => toggleDropdown(index)}
            >
              <span className="selected">{question.options[0]}</span>
              <div className={`caret ${dropdownStates[index] ? 'caret-rotate' : ''}`}></div>
            </div>
            {dropdownStates[index] && (
              <ul className="menu">
                {options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={` ${option === question.options[0] ? 'active' : ''}`}
                    onClick={() => {
                      handleOptionChange(question.id, 0, option);
                      toggleDropdown(index);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div class="flex items-center">
            <input
              id={`link-checkbox-${index}`}
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for={`link-checkbox-${index}`} class="text-12 text-neutral-300 px-2 py-5">
              Allow Students to select multiple options
            </label>
          </div>
        </div>
      </div>
 ))}



<button type="button" className=" w-[43rem] h-[1.25rem] wrapper display-flex items-center inline-flex
px-4 py-5 gap-6 text-primary-500 bg-primary-50 text-light text-left font-regular dmsans" onClick={handleAddQuestion}>
<svg class="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
Add your Questions
  </button>
</div>

<div className="wrapper display-flex flex flex-col items-center justify-center py-2 text-neutral-500 bg-neutral-50 text-light text-left font-regular dmsans">
      {questions.map((question, index) => (
        <div key={question.id}>
          <p>Question {index + 1}</p>
          {previewStates[index] ? (
            question.questionText ? (
              <div className="wrapper display-flex flex flex-col items-left justify-center py-5 text-neutral-500 text-light text-left font-regular dmsans">
                <p className="text-12 text-neutral-300">Question</p>
                <span className="bg-white text-neutral-500 text-light py-3 px-4 text-left" style={{ width: '640px', height: '48px' }}>
                  {question.questionText}
                </span>
                <p className="text-12 text-neutral-300">Options: {question.options.join(', ')}</p>
              </div>
            ) : null
          ) : null}
        </div>
      ))}
    </div>   

  </div>  
    <div className="flow-root items-center bg-transparent px-16 py-3">
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

export default Multichoice;

