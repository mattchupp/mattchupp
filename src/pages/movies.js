import React from "react"

// import Layout from "../components/layout"

const movieList = [
  {
    "title": "Godfather",
    "watched": false
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
    'title': 'Bourne',
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
 
  
]


const IndexPage = () => (
  <div>
    <h1>Movie Watchlist</h1>

    {movieList.map(movie => (
      <div>
        {movie.title}
      </div>
    ))}
    
  </div>
)

export default IndexPage
