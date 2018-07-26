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
