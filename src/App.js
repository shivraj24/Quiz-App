import { useState } from 'react';
import EndQuiz from "./Component/EndQuiz";
import MainMenu from "./Component/MainMenu";
import Quiz from "./Component/Quiz";

import QuizContext from "./Helper/Context";

import './App.css';

function App() {
  const [GameState, setGameState] = useState("menu");
  const [GameScore,setGameScore] = useState(0);


  return (

    <div className="App">

      <h1> Quiz App</h1>
      <QuizContext.Provider value={{GameState,setGameState,GameScore,setGameScore}}>
        {GameState === "menu" && <MainMenu />}
        {GameState === "quiz" && <Quiz />}
        {GameState === "endquiz" && <EndQuiz />}

      </QuizContext.Provider>
      
     

    </div>


  );
}

export default App;
