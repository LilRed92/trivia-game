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

 import React, { useState, useEffect } from 'react';

 function GameSetup({ onDataReceived }) {
  const [amount, setAmount] = useState([]);
  const [category, setCategory] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [type, setType] = useState([]);
  const [name, setName] = useState([]);
  const [triviaCategories, setTriviaCategories] = useState([]);
  const [formState, setFormState] = useState({
    amount: 0,
    category: "",
    difficulty: "",
    type: "",
    name: ""
  });
  //const categorySelector = useRef(null);

  // Fetch req to get category data for use in form category selection options BEFORE form is submitted
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch('http://localhost:3000/trivia/categories');
        // const response = await fetch('./server/data/categories.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        };

        const data = await response.json();
        setTriviaCategories(data);

        return data;

      } catch (err) {
          console.error('Fetch error:', err);
      }
    };

    fetchCategoryData();
  }, []);


  console.log(triviaCategories);

  const handleInputChange = (event) => {
    //setAmount(event.target.value);
    // console.log(amount);
    // setCategory(event.target.value);
    // setDifficulty(event.target.value);
    // setType(event.target.value);
    // setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState(currentState => {
      return {
        ...currentState,
        amount: currentState.amount + 1,
        category: currentState.category,
        difficulty: currentState.difficulty,
        type: currentState.type,
        name: currentState.name
      }
    });
    onDataReceived(formState);
  };

  const categories = [];
  categories.name = triviaCategories.name;
  categories.key = triviaCategories.id;
  return (
    <>
    <p className="instructions">Please make your selections below, and hit the "Play!" button to start the game.</p>
    <form onSubmit={handleSubmit}>
        <label>Number of questions (Max 50):
            <input
                type="number"
                value={amount}
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="10"
                max="50"
                required      
            />
        </label>
        {/* TODO - Create a dropdown that populates options per fetched category data. Possibly create a new component for dropdown */}
        <p>Please select a category.
            <select 
                name="selectedCategory"
                value={category}
                multiple={true}
                onChange={(e) => setCategory(e.target.value)}
              >
          {categories.map((category, i) => (
                <option
                    id={i}
                    name={category.name}
                    value={category.key}
                >
                {category.name}
                </option>
            ))}
          </select>
        </p>

        <label>
          Select question difficulty level:
          <select
              value={difficulty}
              name="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
          </select>
        </label>

        <label>
          Select question type:
          <select
              value={type}
              name="type"
              onChange={(e) => setType(e.target.value)}
              >
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
          </select>
        </label>
        <label>Please enter your name:
          <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Player Name"
          />
        </label>
        <button type="submit">Create Trivia Game!</button>
    </form>
    </>
  )

 }

 export default GameSetup;