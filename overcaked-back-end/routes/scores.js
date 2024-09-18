import express from 'express';
const scoresRouter = express.Router();
import { postScore } from '../controllers/scores-controller.js';

scoresRouter
    .route("/")
    .post(postScore)

export default scoresRouter;