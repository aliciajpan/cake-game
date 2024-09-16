import express from 'express';
const cakesRouter = express.Router();
// import { getAllCakes, generateCakes, getCake, editCake } from '../controllers/cakes-controller';
import { generateCakes, submitCake } from '../controllers/cakes-controller.js';

cakesRouter
    .route("/")
    .post(generateCakes)

cakesRouter
    .route("/submit")
    .post(submitCake)

// cakesRouter
//     .route("/cakes/:cakeId")
//     .get(getCake)
//     .put(editCake)

export default cakesRouter;