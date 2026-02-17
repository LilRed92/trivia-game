import { useState } from 'react'
import GameSetup from './components/GameSetup.jsx';
import GamePlay from './components/GamePlay.jsx';
// import GameResults from './components/GameResults.jsx';
import './App.css'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);


  const handleFormData = (questions) => {
    setIsSubmitted(true);
    setQuestions();
  };

  return (
    <>
      <h1 className="startGreeting">Trivia Game!</h1>
      
      {!isSubmitted && <GameSetup onDataReceived={handleFormData} />}
      {/* {(isSubmitted && !gameOver) && <GamePlay forminput={}/>}
      {/* {!isSubmitted && <GameSetup onDataReceived={handleFormData} />} */}
      {(isSubmitted && !gameOver) && <GamePlay />}
      {gameOver && <GameResults />} */}

    </>
  )
}

export default App
