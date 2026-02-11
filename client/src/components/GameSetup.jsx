/*
 // TODO Customization Features:
 //  // NOTE Base URL: https://opentdb.com/api.php?

 //  // NOTE Modified URL: `https://opentdb.com/api.php?${amount}&${category}&${difficulty}&${type}

 //  // NOTE Number of Questions: Min 10 Max 50 (amount=)

 //  // NOTE Question Type: Any, Multiple choice(type=multiple), True/False(type=boolean)

 //  // NOTE Question Difficulty: Any, Easy(difficulty=easy), Medium(difficulty=medium), Hard(difficulty=hard)

 //  // NOTE Question Category: Any, General Knowledge(category=9), [Entertainment: Books(category=10), Film(category=11), Music(category=12), Musicals & Theatres(category=13), Television(category=14), Video Games(category=15), Board Games(category=16), Comics(category=29), Japanese Anime & Manga(category=31), Cartoon & Animations(category=32)], Science & Nature(category=17), [Science: Computers(category=18), Mathematics(category=19), Gadgets(category=30)], Mythology(category=20), Sports(category=21), Geography(category=22), History(category=23), Politics(category=24), Art(category=25), Celebrities(category=26), Animals(category=27), Vehicles(category=28)

 //  // NOTE URL for ALL DEFAULTS, ONLY NUM of questions specified
 // // // https://opentdb.com/api.php?amount=10

 //  // NOTE URL for ONLY CATEGORY(General Knowledge) and NUM of Qs specified
 // // // https://opentdb.com/api.php?amount=10&category=9
   */

 // useState
//  amount: amount,
//    category: category,
//    difficulty: difficulty,
//    type: type

// useRef
// playerName
// playerScore

 import React, { useState, useRef } from 'react';

 function GameSetup({ }) {
  const [amount, setAmount] = useState([]);
  const [category, setCategory] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [type, setType] = useState([]);

  const fetchData = async () => {
    try {
      const params = new URLSearchParams({ questionAmount: amount, questionCategory: category, questionDifficulty: difficulty, questionType: type });
      const response = await fetch(`http://localhost:3000/trivia/game?${params}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      };

      const questions = await response.json();

       return onDataReceived(questions);

    } catch (err) {
        console.error('Fetch error:' err);
    }
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value);
    setCategory(event.target.value);
    setCategory(event.target.value);
    setDifficulty(event.target.value);
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Number of questions (Max 50):
            <input
                type="number"
                value={amount}
                onChange={handleInputChange}
                placeholder="10"
                max=50       
            />
        </label>

        <label htmlFor="category">Please select a category.
            <input
                type="number"
                value={amount}
                onChange={handleInputChange}
                placeholder="10"
                max=50       
            />
        </label>
        

    </form>
    </>
  )

 }