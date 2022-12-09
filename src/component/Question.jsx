
import {Questions} from '../data/Questions';
import  { useState } from 'react';
import { Feedback } from './Feedback';

export function Question(){
    let startCounter =10;
    let [currentQuestion,setCurrentQuestion] = useState(0);
    let [score,setScore] = useState(0);
    let [counter,setCounter] = useState(startCounter);
    let [feedback,setFeedback] = useState(null);
    let [color,setColor] = useState(null);
   
 let  nextQuestion = currentQuestion + 1;

   setTimeout(()=>{

    if (counter !==0) {
      counter = counter-1;
    setCounter(counter);
    console.log(counter);
    } else {
    
		if (nextQuestion < Questions.length) {
			setCounter(startCounter);
            setCurrentQuestion(nextQuestion);
        }
       
    }
  
    },1000);



    const handleOptionEvent =(opt)=>{
        
    let selectOpt =opt.target.innerText;
    if(selectOpt === Questions[currentQuestion].answer){
        setScore(score+1);
       setFeedback('Correct Answer');
       setColor('alert alert-success');
    } else {
        
   setFeedback('Incorrect Answer');
   setColor('alert alert-danger');

        

    }
    if (nextQuestion < Questions.length) {
    setCurrentQuestion(nextQuestion);

            
                } else {
                    

                    setFeedback('Task Completed');
                    setColor('alert alert-primary');

                }
    }
let quizStatus ='pending';

  if(score >=3){
    quizStatus= 'Pass';
} 


    
    return (  
    
    <div>
        <h2 id="question" >Flag-Guess-Quiz  <span className="badge rounded-pill bg-dark">{counter}</span>
</h2>

    <p>{Questions[currentQuestion].question}</p>
    <img src={Questions[currentQuestion].image} className="img-responsive img-fluid img" alt=""/>
    <ul>
   
        {
    Questions[currentQuestion].option.map(x=>{
        return(
            <li>
            <button  onClick={handleOptionEvent} name="opt" className='btn btn-primary'>{x}</button>
            </li>
        )
    })
}
   
    </ul>
    <div className='container'>
   <Feedback  color={color}  Message={feedback} /> 

    </div>

    <div class="d-flex justify-content-between">
      
 
    <h5 className='text-danger '>Question:{currentQuestion+1}/{Questions.length}</h5>
    <h6 className="text-center">Status:<span className='text-danger' >{quizStatus}</span></h6>
    <h5 className='text-danger ' >Score:{score}/5</h5>
    </div>
    
    </div>
              
            
              
   
        
    );
}