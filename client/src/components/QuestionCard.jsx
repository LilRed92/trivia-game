
// map wrong answers from array of strings to an array of objects
// i.e. wrong answers = [{ name: "Gian Lorenzo Bernini", isCorrect: false }, { name: }
// "Auguste Rodin",
// "Donatello"}
// all answers = []

import React, { useState, useRef } from 'react';

function QuestionCard({  }) {

    const fetchQuestionData = async () => {
        try {
          const params = new URLSearchParams({ questionAmount: amount, questionCategory: category, questionDifficulty: difficulty, questionType: type });
          const response = await fetch(`http://localhost:3000/trivia/game?${params}`);
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          };
    
          const questions = await response.json();
    
           return onDataReceived(questions);
    
        } catch (err) {
            console.error('Fetch error:', err);
        }
      };
};

export default QuestionCard;