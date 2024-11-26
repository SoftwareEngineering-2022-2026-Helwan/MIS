import { Movies } from "../db/index.js";

export const task4Controller = async (req, res) => {
    let with_cond = req.cond?? 0;
    
    if(with_cond)
        {
            await Movies.updateMany({score: { $exists: true }}, {$set: {
                score: {
                    $cond: [{ $eq: ["$_id", 1] },
                    {
                        $push: {
                            score: {
                                $each: [5], // Value to insert (5)
                                $position: 2 // Insert at the third position (index 2)
                            }
                        }
                    }, 
                    {
                        $push: {
                            score: {
                                $each: [6], // Value to insert (5)
                                $position: 3 // Insert at the third position (index 2)
                            }
                        }
                    }]
                    
                }
            }});
    }
    else{
        
        await Movies.updateOne({ _id: 1 , score: { $exists: true }}, { $push: { score: { $each: [5], $position: 2 } } });
        
        await Movies.updateMany({ _id: { $ne: 1 }, score: { $exists: true } },{ $push: { score: { $each: [6], $position: 3 } } });   
    }

    let movies = await Movies.find({}).toArray();
    res.status(200).json({status: "Updated", movies});
};
