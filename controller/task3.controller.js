import { Movies } from "../db/index.js";

export const task3Controller = async (req, res) => {

    let movieName = req.body.name ?? '';
    let score = req.body.score ?? [];

    let movie = await Movies.findOne({ name: movieName });

    if (movie) {
        await Movies.updateOne({ name: movieName }, { $set: { score: score } });
        let newMovie = await Movies.findOne({ name: movieName });
        res.status(200).json({ status: "Updated", movie: newMovie });
    }
    else {
        res.status(404).json({ message: 'Movie not found' });
    }

};
