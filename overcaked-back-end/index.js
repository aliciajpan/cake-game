import express from 'express';
import cors from 'cors';
import "dotenv/config";
import cakeRouter from './routes/cakes';
import scoresRouter from './routes/scores';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.use('/cakes', cakeRouter);
app.use('/scores', scoresRouter);

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});