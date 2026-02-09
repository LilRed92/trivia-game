import dotenv from 'dotenv';
dotenv.config();

export const getTriviaQuestions = (req, res) => {
   // Need params for API URL completion.

   // const url = 
   fetch(url)
    .then((res) => res.json())
    .then((data) => {
        res.send ({ data });
    })
    .catch((err) => {
        console.err('Error fetching trivia questions', err);
        res.status(500).json({ message: 'Interval Server Error', detail: err.message });
    });
};