
// map wrong answers from array of strings to an array of objects
// i.e. wrong answers = [{ name: "Gian Lorenzo Bernini", isCorrect: false }, { name: }
// "Auguste Rodin",
// "Donatello"}
// all answers = []

import React, { useRef } from 'react';
import { ScoreContext } from './ScoreContext.jsx';
// function getInputs(prevState, queryData) {
      
//       // const params = new URLSearchParams({
//       //   amount: queryData.get('amount'),
//       //   category: queryData.get('category'),
//       //   difficulty: queryData.get('difficulty'),
//       //   type: queryData.get('type')
//       // });

//       return amount, category, difficulty, type;
// };
function QuestionCard(prevState, queryData, { onNameReceived, onAmountReceived, onCategoryReceived }) {
    const questionScore = useRef(0);
    let score = [];
    let questions = [];

    const params = new URLSearchParams({
        questionAmount: queryData.get('amount'),
        questionCategory: queryData.get('category'),
        questionDifficulty: queryData.get('difficulty'),
        questionType: queryData.get('type')
    });

    const name = queryData.get('name');
    onNameReceived(name);
    onAmountReceived(params.questionAmount);
    onCategoryReceived(params.questionCategory);

    const fetchQuestionData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/trivia/game?${params}`);
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          };
    
          const questions = await response.json();
    
           return questions;
    
        } catch (err) {
            console.error('Fetch error:', err);
        }
      };
      fetchQuestionData();

      // const handleChange = (e) => {
      //     setIsSelected(e.target.value)
      // }; 

      const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        const selectedAnswer = formJson.currentAnswer;
        console.log(selectedAnswer);

        if(selectedAnswer === true) {
            questionScore.current = questionScore.current + 1
        }

        score = score.push(questionScore);


      }

      // const nextQuestion = (e) => {

      //   setIsSelected = "";
      // };

      const cAnswer = {isCorrect: true};
      cAnswer.name = questions.cAnswer;

      const iAnswers = questions.iAnswers.map(iAnswer => {
        return { name: iAnswer, isCorrect: false };
      });

      const answers = [];
      answers.push(cAnswer);
      answers.push(...iAnswers);

      return (
          <ScoreContext value={score}>
          <div className="questionCard">
          <p className="question">{questions.question}</p>
          <form className="answers" onSubmit={handleSubmit}>
            {answers.map((answer, i) => (
                <label id={i}>
                    <input
                        type="radio"
                        name="currentAnswer"
                        value={answer.isCorrect}
                    />
                    {answer.name}
                </label>
            ))}
          <button type="submit">"➔"</button>
          </form>
        </div>
        </ScoreContext>
      )
};

export default QuestionCard;