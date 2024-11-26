import { Movies } from "../db/index.js";

export const task2Controller = async (req, res) => {
    
    let movieName = req.body.name ?? ''; 
    
    let movie = await Movies.findOneAndDelete({name: movieName});
    
    if (movie) {
        res.status(200).json({ status: "Deleted" , movie });
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
};
