import { MongoClient } from "mongodb";


const URI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(URI);

export const db = client.db("cinema");

export const Movies = db.collection("movies");
export const Reviews = db.collection("reviews");

export const MOVIE_DATA = [
    { _id: 1, name: "Blitz", rate: 5 },
    { _id: 2, name: "Two", rate: 3 },
    { _id: 3, name: "Charlie", rate: 4 },
    { _id: 4, name: "missing", rate: 2 },
    { _id: 5, name: "Inception", rate: 5 },
    { _id: 6, name: "Interstellar", rate: 5 },
    { _id: 7, name: "Dunkirk", rate: 4 },
    { _id: 8, name: "Memento", rate: 4 },
    { _id: 9, name: "Tenet", rate: 3 },
    { _id: 10, name: "The Prestige", rate: 5 }
];

export const REVIEWS_DATA = [
    { _id: 1, movieId: 1, text: "Great movie!", rating: 5 },
    { _id: 2, movieId: 2, text: "Average movie.", rating: 3 },
    { _id: 3, movieId: 3, text: "Good movie.", rating: 4 },
    { _id: 4, movieId: 4, text: "Not my favorite movie.", rating: 2 },
    { _id: 5, movieId: 5, text: "Great movie!", rating: 5 },
    { _id: 6, movieId: 6, text: "Average movie.", rating: 3 },
    { _id: 7, movieId: 7, text: "Good movie.", rating: 4 },
    { _id: 8, movieId: 8, text: "Not my favorite movie.", rating: 2 },
    { _id: 9, text: "Great movie!", rating: 5 },
    { _id: 10,  text: "Average movie.", rating: 3 }
];