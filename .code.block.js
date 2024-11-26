// const { MongoClient } = require('mongodb');

// async function run() {
//     const uri = "mongodb://localhost:27017";  
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");

//         const db = client.db("myDatabase");

//         // Create at least two collections
//         const Movies = db.collection("Movies");
//         const Users = db.collection("Users");
//         const Reviews = db.collection("Reviews");

//         //#region 
//         // Insert documents
//     /*    await Movies.insertMany([
//             { _id: 1, name: "Blitz", rate: 5 },
//             { _id: 2, name: "Two", rate: 3 },
//             { _id: 3, name: "Charlie", rate: 4 },
//             { _id: 4, name: "missing", rate: 2 }
//         ]);

//         await Users.insertMany([
//             { _id: 5, name: "David", age: 35 },
//             { _id: 6, name: "Eman", age: 28 },
//             { _id: 7, name: "Sarah", age: 40 },
//             { _id: 8, name: "John", age: 32 }

//         ]);*/
        
//         // Linking the MovieID to the review where the one movie will have many reviews for the one to many
//         /*
//         await Reviews.insertMany([
//             { movieId: 1, content: "Great movie.", rating: 5 },
//             { movieId: 1, content: "Exciting and thrilling.", rating: 4 },
//             { movieId: 3, content: "Not bad.", rating: 3 },
//             { movieId: 4, content: "Could be better.", rating: 2 }]);*/
        

//        // console.log("Documents inserted successfully.");

//         //-------------------------------------------------------------------------------------------
//         // Delete one document from each collection
//         /*const deleteMovieResult = await Movies.deleteOne({ name:"Two" });
//         const deleteUserResult = await Users.deleteOne({ name : "Sarah" });*/

//         //console.log("Documents deleted successfully.");

//         //---------------------------------------------------------------------------------------

//         //Update at least two documents [add an array called ‘Score’] in each collection.
//         /*
//         const updateMovieResult = await Movies.updateOne({ name: "Charlie" }, { $set: { Score: [1, 2, 3, 4, 5] } });
//         const updateUserResult = await Users.updateOne({ name: "Eman" }, { $set: { Score: [1, 2, 3, 4, 5] } });
//         const updateMovieResult2 = await Movies.updateOne({ name: "Blitz" }, { $set: { Score: [1, 2, 3, 4, 5] } });
//         const updateUserResult2 = await Users.updateOne({ name: "David" }, { $set: { Score: [1, 2, 3, 4, 5] } });
//         */
//         //console.log("Documents updated successfully."); 
        
//         //---------------------------------------------------------------------------------------
//         //If the ‘_id’ of the document =1 update the array called ‘Score’ and put number 5 in the third position of the array if not put number 6 in the fourth position.
//         /*const _id = await Movies.findOne({ _id: 1 })
//         if(_id){
//             await Movies.updateOne({ _id: 1 }, { $push: { Score: { $each: [5], $position: 2 } } });
//             console.log("Document updated successfully.");
//         }
//         else{
        
//             // Add 6 in the fourth position for all other documents
//             await Movies.updateMany(
//                 { _id: { $ne: 1 } },
//                 { $push: { Score: { $each: [6], $position: 3 } } }
//             );
//             await Users.updateMany(
//                 { _id: { } },
//                 { $push: { Score: { $each: [6], $position: 3 } } });
                
//             //await Movies.updateMany({ _id: { $ne: 1 } }, { $push: { Score: { $each: [6], $position: 4 } } });
//             console.log("Document updated successfully.");
//         }
//         const allMovies = await Movies.find({}).toArray();
//         const allUsers = await Users.find({}).toArray();
//         console.log(allMovies);
//         console.log(allUsers);*/
        
//         //---------------------------------------------------------------------------------------

//         //Multiply each element in the array called ‘Score’ by 20
// /*
//         const multiplyScoresInUsers = await Users.updateMany(
//             { Score: { $exists: true } }, // Ensure the 'Score' field exists
//             [
//                 {
//                     $set: {
//                         Score: {
//                             $map: {
//                                 input: "$Score",       
//                                 as: "score",           
//                                 in: { $multiply: ["$$score", 20] } // Multiply each element by 20
//                             }
//                         }
//                     }
//                 }
//             ]
//         );*/
// /*        
//         console.log("Users collection updated with multiplied Scores.");
        
//         const multiplyScoresInMovies = await Movies.updateMany(
//             { Score: { $exists: true } }, // Ensure the 'Score' field exists
//             [
//                 {
//                     $set: {
//                         Score: {
//                             $map: {
//                                 input: "$Score",       
//                                 as: "score",          
//                                 in: { $multiply: ["$$score", 20] } // Multiply each element by 20
//                             }
//                         }
//                     }
//                 }
//             ]
//         );
        
//         console.log("Movies collection updated with multiplied Scores.");
//         */

//         //#endregion 
// //---------------------------------------------------------
//      //  Create a one – Many relationship between documents in different collection. [Creating documents and relation using IDE ]
//      // Aggregating using IDE    

        
//         /*const aggregationResult = await Movies.aggregate([
//         {
//             $lookup: {
//                 from: "Reviews",         // Name of the "Reviews" collection
//                 localField: "_id",       // Field in "Movies" collection
//                 foreignField: "movieId", // Field in "Reviews" collection
//                 as: "reviews"            // Output array field
//             }
//         },
//         {
//             $project: {
//                 _id: 1,
//                 name: 1,
//                 rate: 1,
//                 reviews: 1  // Include the reviews array in the output
//             }
//         }
//     ]).toArray();

//     console.log("Movies with reviews:", JSON.stringify(aggregationResult, null, 2));*/
    

//     //------------------------------------------------------------------------------------------------

//     // Aggregation (one to many relationship) using CMD 

//     /*db.Movies.aggregate([
//     {
//         $lookup: {
//             from: "Reviews",       
//             localField: "_id",      
//             foreignField: "movieId", 
//             as: "reviews"           
//         }
//     },
//     {
//         $project: {
//             _id: 1,
//             name: 1,
//             rate: 1,
//             reviews: 1  
//         }
//     }
//  ])*/

//     } finally {
//         await client.close();
//     }
// }




// run().catch(console.dir);
