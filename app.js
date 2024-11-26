import express from "express";
import {taskRouter} from './router/task.router.js';

const app = express();
app.use(express.json());

app.use(taskRouter);

/*
--to join reviews with movie

db.movies.aggregate({$lookup: { from: "reviews", localField: "_id", foreignField: "movieId", as: "Reviews" }});

*/


app.listen(8000, "127.0.0.1",() => {
    console.log("Server started on port 8000");
})