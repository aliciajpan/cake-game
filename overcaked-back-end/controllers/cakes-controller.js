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

export {generateCakes};