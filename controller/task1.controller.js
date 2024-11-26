import {Movies, Reviews, MOVIE_DATA, REVIEWS_DATA} from "../db/index.js";

export const task1Controller = async(req, res) => 
{
    await Movies.insertMany(MOVIE_DATA);
    await Reviews.insertMany(REVIEWS_DATA);

    res.json({message: "Collection Created and Data Inserted!"});
};