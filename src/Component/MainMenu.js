import React from 'react';
import {useContext} from 'react';
import QuizContext from "../Helper/Context";
import "../App.css";  
function Component() {
  const {GameState, setGameState} =  useContext(QuizContext);
  return <div className="Menu">
    <button onClick = {() =>{
      setGameState("quiz");
    }}> Start Quiz</button>
  </div>;
}

export default Component;