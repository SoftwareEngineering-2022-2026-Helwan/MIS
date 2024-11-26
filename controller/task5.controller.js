import {Movies} from "../db/index.js";

export const task5Controller = async (req, res) => {

    // multiply each element of score array by 20
    const movies = await Movies.updateMany(
        { score: { $exists: true } }, 
        [
            {
                $set: {
                    score: {
                        $map: {
                            input: "$score",       
                            as: "scoreValue",          
                            in: { $multiply: ["$$scoreValue", 20] } 
                        }
                    }
                }
            }
        ]
    );

    res.status(200).json({ status: "Updated", movies: await Movies.find().toArray() });

};
