import dotenv from 'dotenv';
dotenv.config();

export const getTriviaQuestions = (req, res) => {
   // Need params for API URL completion.

   // NOTE Base URL: https://opentdb.com/api.php?

   // NOTE Modified URL: `https://opentdb.com/api.php?${amount}&${category}&${difficulty}&${type
   
   // TODO IMPORTANT! UPDATE params once GameForm.jsx is complete
   // const amount = req.query.questionAmount;
   // const category = req.query.questionCategory;
   // const difficulty = req.query.questionDifficulty;
   // const type = req.query.questionType;

   const amount = '10';
   const category = '25';
   const difficulty = 'easy';
   const type = 'multiple';

   const params = new URLSearchParams({
   amount: amount,
   category: category,
   difficulty: difficulty,
   type: type
   });


   const url = `https://opentdb.com/api.php?${params}`;
   //const url = `https://opentdb.com/api.php?${amount}&${category}&${difficulty}&${type}`;
   //const hardURL = 'https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple'
   fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const allQuestionsData = data.results;
        const questions = allQuestionsData.map(({ question, correct_answer, incorrect_answers, category, type }) => ({
            question,
            cAnswer: correct_answer,
            iAnswers: incorrect_answers,
            category,
            type
        }));
        
        res.send({ questions });
    })
    .catch((err) => {
        console.err('Error fetching trivia questions', err);
        res.status(500).json({ message: 'Interval Server Error', detail: err.message });
    });
    console.log(url);
};