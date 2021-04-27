import { useState } from 'react';
import EndQuiz from "./Component/EndQuiz";
import MainMenu from "./Component/MainMenu";
import Quiz from "./Component/Quiz";

import './App.css';

function App() {
  const [GameState, setGameState] = useState("menu");


  return (

    <div className="App">

      <h1> Quiz App</h1> 

      {GameState === "menu"  && <MainMenu />}
     {GameState === "quiz"  && <Quiz />}
     {GameState === "endquiz"  && <EndQuiz />}

    </div>

     
  );
}

export default App;
