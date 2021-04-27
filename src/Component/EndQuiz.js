import React, { useContext } from 'react';
import QuizContext from "../Helper/Context"
import Questions from "../Helper/QuestionBank";
// import { Container } from './styles';

function EndQuiz() {
  const{GameState,setGameState,GameScore,setGameScore} = useContext(QuizContext);

  const restartQuiz = () =>{
    setGameScore(0);
    setGameState("menu");
  }

  return <div className="EndQuiz">
    <h1>Quiz Finished</h1>
    <h2> {GameScore} / {Questions.length}</h2>
    <button onClick ={() => {
      restartQuiz();
    }}>Restart Quiz</button>
  </div>;
}

export default EndQuiz;