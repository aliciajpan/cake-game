import flavours from '../data/flavours.js';
import generateNum from '../utils/rng.js';
import { readFile, writeFile } from '../utils/json.js';

function generateCakes (_req, res) {
    try {
        const cakes = [];

        for (let i=0; i<20; i++) {
            const generatedNum = generateNum(3);
            const cakeLayers = [];
            const icingFlavour = flavours[generateNum(3)-1];

            for (let i=0; i<generatedNum; i++) {
                cakeLayers.push(flavours[generateNum(3)-1]);
            }

            cakes.push(
                {
                    id: i+1,
                    layerCount: generatedNum,
                    layers: cakeLayers,
                    icing: icingFlavour
                }
            )
        }

        // const cakes = [
        //     {
        //         id: 1,
        //         layerCount: 1,
        //         layers: ["vanilla"],
        //         icing: "vanilla"
        //     },
        //     {
        //         id: 2,
        //         layerCount: 2,
        //         layers: ["vanilla", "vanilla"],
        //         icing: "vanilla"
        //     },
        //     {
        //         id: 3,
        //         layerCount: 3,
        //         layers: ["vanilla", "vanilla", "vanilla"],
        //         icing: "vanilla"
        //     },            
        //     {
        //         id: 4,
        //         layerCount: 1,
        //         layers: ["chocolate", "chocolate", "chocolate"],
        //         icing: "chocolate"
        //     },
        //     {
        //         id: 5,
        //         layerCount: 2,
        //         layers: ["chocolate", "chocolate"],
        //         icing: "chocolate"
        //     },
        //     {
        //         id: 6,
        //         layerCount: 3,
        //         layers: ["chocolate"],
        //         icing: "chocolate"
        //     }
        // ]

        writeFile("cakes.json", cakes);
        res.json(cakes);
    } 
        
    catch (error) {
        res.status(500).json({
            message: "Unable to retrieve cakes data",
            error:error.toString()
        });
    }
};

function compareCakes(submittedCake, truthCake) {
    if (submittedCake.icing === truthCake.icing 
        && submittedCake.cakeLayers.length === truthCake.layerCount) {
            for (let j=0; j<submittedCake.cakeLayers.length; j++) {
                if (submittedCake.cakeLayers[j] !== truthCake.layers[j]) {
                    return false;
                }
            }
        return true;
    }

    return false;
}

function submitCake (req, res) {
    try {
        const allCakes = readFile("cakes.json");
        console.log(req.body);

        for (let i=0; i<req.body.compareIds.length; i++) {
            if (compareCakes(req.body, allCakes[req.body.compareIds[i]-1])) {
                res.send(req.body.compareIds[i]);
                return;
            }
        }

        res.send(null);
    } 
        
    catch (error) {
        res.status(500).json({
            message: "Unable to submit cake",
            error:error.toString()
        });
    }
};

export {generateCakes, submitCake};