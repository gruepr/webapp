import { Link } from "react-router-dom";
import Demo from "./Demo";
import { superagent } from "superagent";
import content from "../../content/content";

const InputForm = () => {
    return (
        
<div className="bg-white py-10 ">

<div className="wrapper display-flex flex flex-col items-center justify-center">
    
<form> 
<label>
    <h1 class=" py-10 text-neutral-300 text-light text-left font-regular dmsans  ">
           Survey Name*
           <br>
           </br>
           <div class="border-y-neutral-100 border-solid border-2 text-neutral-500">
            <input type="text" name="name" placeholder="Enter Text" style={{width:"640px", height:"48px"}}/>
            </div>
            This will be the name of the survey you send to your students!
            </h1>
            </label>
            
        <Link to="/Demo">
        <button className="primary-button bg-primary-500 inline-flex items-center" onClick>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 mr-2"> 
        <path fillRule="evenodd" 
        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
        </svg>
        <input type="submit" value={content.surveyHome.sd.button} style={{width: "640px", height: "18px"}}/>
   
        </button>
        </Link>
        </form>
</div>
</div>
   
    );  
};

export default InputForm;

