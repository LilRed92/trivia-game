import express from 'express';
import { getTriviaQuestions } from '../controllers/getTriviaQuestions.js';
import { getCategoryData } from '../controllers/getCategoryData.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'This is the API ROOT' });
});

router.get('/game', getTriviaQuestions);
router.get('/categories', getCategoryData);

export default router;