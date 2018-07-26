import * as actionTypes from './actionTypes'

export const addMovie = (movie) => {
  return {
    type : actionTypes.ADD_MOVIE,
    movie : movie
  }
}

export const addMovieToCart = (movie) => {
  return {
    type : actionTypes.ADD_TO_CART,
    movie : movie
  }
}

export const deleteMovie = (movie) => {
  return {
    type : actionTypes.DELETE_MOVIE,
    movie : movie
  }
}

export const populateMovies = (movies) => {
  return {
    type : actionTypes.POPULATE_MOVIES,
    movies : movies
  }
}

export const populateMoviesUsingThunk = () => {

  return (dispatch) => {

    fetch("http://www.omdbapi.com/?s=batman&apikey=b70d5171")
    .then(response => response.json())
    .then((json) => {
      dispatch({type : actionTypes.POPULATE_MOVIES, movies : json.Search})
    })
  }
}
