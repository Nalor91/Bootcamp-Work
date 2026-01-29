const connect = require("./db");


const runDatabaseQueries = async () => {
  
  const db = await connect();
  const movies = db.collection('movies');
  const users = db.collection('users');

  const newUser = {
    name: 'Joshua Cornwell',
    email: 'joshua.cornwell@example.com'
  };

  await users.insertOne(newUser);
  console.log('Inserted New User:', newUser);

  const nolanMovies = await movies.find({ "directors": "Christopher Nolan" })

  console.log('Christopher Nolan Movies:', await nolanMovies.toArray());

  const actionMovies = await movies.find({ "genres": "Action" })
    .sort({ year: -1 });

  console.log('Action Movies:', await actionMovies.toArray());

  // Run this query, should get top 5 best rated movies on IMDB
  const topMovies = await movies.find({ "imdb.rating": { $gt: 8.0 } })
    .project({ title: 1, year: 1, "imdb.rating": 1 })
    .sort({ "imdb.rating": -1 })
    .limit(5)
    .toArray();

  console.log('Top Rated Movies:', topMovies);

  process.exit(0);
};


runDatabaseQueries();

// Using MongoDB Compass, run the following queries:### Create

// 1. **Insert a New Document into the Users Collection**: Practice adding a new user document to the users collection. Include fields name and email.
// db.users.insertOne({ name: "Joshua Cornwell", email: "joshua.cornwell@example.com" })

// ### Read

// 1. Find all movies directed by Christopher Nolan.
// db.movies.find({ directors: "Christopher Nolan" })
// 2. Find movies that include the genre "Action" and sort (descending) them by year.
// db.movies.find({ genres: "Action" }).sort({ year: -1 })
// 3. Find movies with an IMDb rating greater than 8 and return only the title and IMDB information.
// db.movies.find({ "imdb.rating": { $gt: 8.0 } }, { title: 1, imdb: 1 })
// 4. Find movies that starred both "Tom Hanks" and "Tim Allen".
// db.movies.find({ cast: { $all: ["Tom Hanks", "Tim Allen"] } })
// 5. Find movies that starred both and only "Tom Hanks" and "Tim Allen".
// db.movies.find({ cast: { $all: ["Tom Hanks", "Tim Allen"], $size: 2 } })
// 6. Find comedy movies that are directed by Steven Spielberg.
// db.movies.find({ genres: "Comedy", directors: "Steven Spielberg" })

// ### Update

// 1. Add a new field "available_on" with the value "Sflix" to "The Matrix".
// db.movies.updateOne({ title: "The Matrix" }, { $set: { available_on: "Sflix" } })
// 2. Increment the metacritic of "The Matrix" by 1.
// db.movies.updateOne({ title: "The Matrix" }, { $inc: { "metacritic": 1 } })
// 3. Add a new genre "Gen Z" to all movies released in the year 1997.
// db.movies.updateMany({ year: 1997 }, { $addToSet: { genres: "Gen Z" } })
// 4. Increase IMDb rating by 1 for all movies with a rating less than 5.
// db.movies.updateMany({ "imdb.rating": { $lt: 5 } }, { $inc: { "imdb.rating": 1 } })

// ### Delete

// 1. Delete a comment with a specific ID.
// db.comments.deleteOne({ _id: ObjectId("SPECIFIC_COMMENT_ID") })
// 2. Delete all comments made for "The Matrix".
// db.comments.deleteMany({ movie: "The Matrix" })
// 3. Delete all movies that do not have any genres.
// db.movies.deleteMany({ genres: { $exists: false } })

// ### Aggregate

// 1. Aggregate movies to count how many were released each year and display from the earliest year to the latest.
// db.movies.aggregate([ { $group: { _id: "$year", count: { $sum: 1 } } }, { $sort: { _id: 1 } } ])
// 2. Calculate the average IMDb rating for movies grouped by director and display from highest to lowest.
// db.movies.aggregate([ { $unwind: "$directors" }, { $group: { _id: "$directors", avgRating: { $avg: "$imdb.rating" } } }, { $sort: { avgRating: -1 } } ])