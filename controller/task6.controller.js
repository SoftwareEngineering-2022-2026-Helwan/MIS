import {Movies, Reviews} from "../db/index.js";

export const task6Controller = async (req, res) => {

    let movieName = req.body.name ?? '';
    let reviewID = parseInt(req.body.review_id) ?? '';
    let ref = parseInt(req.body.ref) ?? 0;

    if(ref == 1) {
        
        let movie = await Movies.findOne({ name: movieName });
        
        if (movie) {
            await Reviews.updateOne({ _id: reviewID }, { $set: { movieId: movie._id } });

            let newReview = await Reviews.findOne({ _id: reviewID });
            
            res.status(200).json({ status: "Updated", review: newReview });
        }   
        else {
            res.status(404).json({ message: 'Movie not found' });
        }
    }
    else
    {
        let review = await Reviews.findOne({ _id: reviewID });
        await Movies.updateOne({ name: movieName },{ $push:{ 
            reviews: {
            $each: [review],
            $position: 0
        }} } );

        let newMovie = await Movies.findOne({ name: movieName });
        res.status(200).json({ status: "Updated", movie: newMovie });
    }

};
