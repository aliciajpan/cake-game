import express from 'express';
const cakesRouter = express.Router();
// import { getAllCakes, generateCakes, getCake, editCake } from '../controllers/cakes-controller';
import { generateCakes } from '../controllers/cakes-controller.js';

cakesRouter
    .route("/")
    .post(generateCakes)

// cakesRouter
//     .route("/cakes/:cakeId")
//     .get(getCake)
//     .put(editCake)

export default cakesRouter;