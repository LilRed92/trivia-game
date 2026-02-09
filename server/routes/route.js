import express from 'express';
import { getTriviaQuestions } from '../controllers/getTriviaQuestions.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'This is the API ROOT' });
});

router.get('/game', getTriviaQuestions);

export default router;