import React from "react"


// json object for all movies
const movieList = [
  {
    'title': 'The Godfather',
    'watched': false
  },
  {
    'title': 'The Godfather II',
    'watched': false
  },
  {
    'title': 'The Godfather III',
    'watched': false
  },
  {
    'title': 'Schindler\'s List',
    'watched': false
  },
  {
    'title': 'Indiana Jones',
    'watched': false
  },
  {
    'title': 'Breakfast at Tiffany\'s',
    'watched': false
  },
  {
    'title': 'The Bourne Identity',
    'watched': true
  },
  {
    'title': 'The Bourne Supremacy',
    'watched': false
  },
  {
    'title': 'The Bourne Ultimatum',
    'watched': false
  },
  {
    'title': 'The Bourne Ultimatum',
    'watched': false
  },
  {
    'title': 'The Bourne Legacy',
    'watched': false
  },
  {
    'title': 'Jason Bourne',
    'watched': false
  },
  {
    'title': 'Goodfellas',
    'watched': false
  },
  {
    'title': 'James Bond',
    'watched': false
  },
  {
    'title': 'Airplane',
    'watched': false
  },
  {
    'title': 'Blade Runner',
    'watched': false
  },
  {
    'title': 'Saving Private Ryan',
    'watched': false
  },
  {
    'title': 'Pulp Fiction',
    'watched': false
  },
  {
    'title': 'Matrix',
    'watched': false
  },
  {
    'title': 'Fargo',
    'watched': false
  },
  {
    'title': 'Pans Labyrinth',
    'watched': false
  },
  {
    'title': 'Shawshank Redemption',
    'watched': false
  },
  {
    'title': 'Fight Club',
    'watched': false
  },
  {
    'title': 'Braveheart',
    'watched': false
  },
  {
    'title': 'Gladiator',
    'watched': false
  },
  {
    'title': 'The Usual Suspects',
    'watched': false
  },
  {
    'title': 'Diehard',
    'watched': false
  },
  {
    'title': 'Terminator',
    'watched': true
  },
  {
    'title': 'Terminator 2',
    'watched': true
  },
  {
    'title': 'Terminator 3-6?',
    'watched': false
  },
  {
    'title': 'Full Metal Jacket',
    'watched': false
  },
  {
    'title': 'Shutter Island',
    'watched': false
  },
  {
    'title': 'Big Labowski',
    'watched': false
  },
  {
    'title': 'Scarface',
    'watched': false
  },
  {
    'title': 'Inglorius Bastards',
    'watched': false
  },
  {
    'title': 'Ferris Buelers Day Off',
    'watched': false
  },
  {
    'title': 'Grand Budapest Hotel',
    'watched': false
  },
  {
    'title': 'Close Encounters of 3rd Kind',
    'watched': false
  },
  {
    'title': 'Dead Poets Society',
    'watched': false
  },
  {
    'title': 'Jack Ryan (Harrison Ford ones)',
    'watched': false
  },
  {
    'title': 'The Witness',
    'watched': false
  },
  {
    'title': 'Mission Impossibles',
    'watched': false
  },
  {
    'title': 'Breakfast Club',
    'watched': false
  },
  {
    'title': '16 Candles',
    'watched': false
  },
  {
    'title': 'The Shining',
    'watched': true
  },
  {
    'title': 'Lord of the Rings',
    'watched': false
  },
  {
    'title': 'Princess Bride',
    'watched': true
  },
  {
    'title': 'Ocean\'s 11',
    'watched': true
  },
  {
    'title': 'Ocean\'s 12-?',
    'watched': false
  },
  {
    'title': 'Minority Report',
    'watched': false
  },
  {
    'title': 'Top Gun',
    'watched': false
  },
  {
    'title': 'Days of Thunder',
    'watched': false
  },
  {
    'title': 'My Fair Lady',
    'watched': false
  },
  {
    'title': 'Butch Cassidy Sundance Kid',
    'watched': false
  },
  {
    'title': 'Platoon',
    'watched': false
  },
  {
    'title': 'Jarassic Park',
    'watched': true
  },
  {
    'title': 'The Last World: Jarassic Park',
    'watched': false
  },
  {
    'title': 'Jarassic Park III',
    'watched': false
  },
  {
    'title': 'Star Trek',
    'watched': false
  },
  {
    'title': 'John Wick',
    'watched': false
  },
  {
    'title': 'Rain Man',
    'watched': false
  },
  {
    'title': 'The Green Mile',
    'watched': false
  },
  {
    'title': 'American Graffiti',
    'watched': false
  },
  {
    'title': 'Psycho',
    'watched': false
  },
  {
    'title': 'Chinatown',
    'watched': false
  },
  {
    'title': 'Sneakers',
    'watched': false
  },
  {
    'title': 'Resident Evil',
    'watched': false
  }
   
]

const strikethrough = {
  'textDecoration': 'line-through'
}


const MoviePage = () => (
  <div className="left-container">
    <h1>Movie Watchlist</h1>
    <table>
      <tr>
        <th>Movie</th>
        <th>Watched</th>
      </tr>

      {movieList.map(movie => (
        <tr>
          <td>
            {movie.watched && <span style={strikethrough}>{movie.title}</span>}
            {!movie.watched && <>{movie.title}</>}
          </td>
          <td>
            {movie.watched && <>yes</>}
            {!movie.watched && <>no</>}
          </td>
        </tr>
      ))}
      
    </table>

  </div>
)

export default MoviePage
