var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }
  var titleContainer = document.querySelector("#title");
  var genreContainer = document.querySelector("#genre");
  var releaseContainer = document.querySelector("#release-date");

  titleContainer.innerHTML = movieObject.title;
  genreContainer.innerHTML = movieObject.genre;
  releaseContainer.innerHTML = movieObject.releaseDate;



var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    }
  ]

  var htmlString0 = `
    <h2>${movieSchedule[0].title}</h2>
    <p>${movieSchedule[0].rating}</p>
    <img class = "poster" src=${movieSchedule[0].poster} alt="movie_poster"/>`

  var htmlString1 =`
  <h2>${movieSchedule[1].title}</h2>
  <p>${movieSchedule[1].rating}</p>
  <img class = "poster" src=${movieSchedule[1].poster} alt="movie_poster"/>`

  var htmlString2 = `
  <h2>${movieSchedule[2].title}</h2>
    <p>${movieSchedule[2].rating}</p>
    <img class = "poster" src=${movieSchedule[2].poster} alt="movie_poster"/>`

var movie = document.querySelector("#movie-schedule");
movie.innerHTML = (htmlString0 + htmlString1 + htmlString2);
