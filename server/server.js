import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use(express.json({ type: "application/json" }));
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/trivia', router);

app.get('/', (req, res) => res.json({ message: 'Hello from the server!' }));


app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`));