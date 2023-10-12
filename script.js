let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    document.write("Movie added<br>");
    printMovies();
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    document.write("Printing all movies...<br>");
    for (let i = 0; i < allMovies.length; i++) {
        document.write(`Title: ${allMovies[i].title}, Rating: ${allMovies[i].rating}, Watched: ${allMovies[i].haveWatched}<br>`);
    }
    document.write("Total number of movies: " + allMovies.length + "<br>");
}

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    document.write(`Printing movies that have a rating higher than ${rating}...<br>`);
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            document.write(`Title: ${allMovies[i].title}, Rating: ${allMovies[i].rating}, Watched: ${allMovies[i].haveWatched}<br>`);
            count++;
        }
    }
    document.write("Total number of matches: " + count + "<br>");
}

//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    document.write("Changing the status of the movie...<br>");
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            if (allMovies[i].haveWatched === true) {
                allMovies[i].haveWatched = false;
                document.write("Status changed to false<br>");
            } else {
                allMovies[i].haveWatched = true;
                document.write("Status changed to true<br>");
            }
        }
    }
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
document.write("----------------<br>");
document.write("running program......<br>");
document.write("----------------<br>");
printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
document.write("----------------<br>");
addMovie(movie1);
document.write("----------------<br>");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.write("----------------<br>");

printMovies();

/*replace console.log with display on web page*/
document.write("----------------<br>");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.write("----------------<br>");

printMovies();
/*replace console.log with display on web page*/
document.write("----------------<br>");

highRatings(3.5);