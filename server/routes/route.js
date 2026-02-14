import express from 'express';
import { getTriviaQuestions } from '../controllers/getTriviaQuestions.js';
// import { getCategoryData } from '../controllers/getCategoryData.js';
import categories from '../data/categories.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'This is the API ROOT' });
});

router.get('/game', getTriviaQuestions);
router.get('/categories', (req, res) => {
    const data = res.json(categories);
    const triviaCategories = data.map(({ id, name }) => ({
        id,
        name
    }));

    res.send({ triviaCategories });
});

export default router;