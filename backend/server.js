import express from 'express';
import cors from 'cors';
import router from './route/route.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/api', router);

app.get('/', (req, res) => res.json({ message: 'Hello from the server!' }));


app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`));