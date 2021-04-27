import React,{useContext, useState} from 'react';
import QuizContext from '../Helper/Context';
import Questions from "../Helper/QuestionBank";
// import { Container } from './styles';

function Quiz() {
  const [CurrQuestion, setCurrQuestion] =  useState(0);
  const [OptionChoosen, setOptionChoosen] =  useState("");
  const {GameScore,setGameScore,GameState,setGameState} = useContext(QuizContext);
  const nextQuestion = ()=>{
    if(OptionChoosen === Questions[CurrQuestion].answer)
    {
      setGameScore(GameScore + 1);

    }
    setCurrQuestion(CurrQuestion+1);
  }
  
  const finishGame = () =>{
    if(OptionChoosen === Questions[CurrQuestion].answer)
    {
      setGameScore(GameScore + 1);
    }
    setGameState("endquiz");

  }

  return( 
    <div className="Quiz">
    <h3>{CurrQuestion+1}{".  "}{Questions[CurrQuestion].Qn}</h3>
    <div className="options">
      <button onClick={()=> setOptionChoosen("optionA")}> 
      {Questions[CurrQuestion].optionA}
      </button>
      <button onClick={()=> setOptionChoosen("optionB")}> 
      {Questions[CurrQuestion].optionB}
      </button>
      <button onClick={()=> setOptionChoosen("optionC")}> 
      {Questions[CurrQuestion].optionC}
      </button>
      <button onClick={()=> setOptionChoosen("optionD")}> 
      {Questions[CurrQuestion].optionD}
      </button>

    </div>
    { CurrQuestion === Questions.length -1 ? (
      <button onClick = {() => finishGame() }>Finish Game</button>
      )
      :
      (
      <button onClick = {()=> nextQuestion()}> Next Question</button>
      )
    }
    
    </div>
    );
}

export default Quiz;