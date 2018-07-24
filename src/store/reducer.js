const initialState = {
  movies : [{movieTitle : "Spider-man: Homecoming", moviePoster : 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SY1000_CR0,0,658,1000_AL_.jpg'}, {movieTitle: 'Spider-Man', moviePoster : 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'}, {movieTitle: 'The Amazing Spider-Man', moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg'}],
  movieTitle : '',
  moviePoster : '',
}

const reducer = (state = initialState, action) => {

  if(action.type == "ADD_MOVIE_TITLE") {
    return {
      ...state,
      movieTitle: action.value
    }
  }
  else if(action.type == "ADD_MOVIE_IMAGE") {
    return {
      ...state,
      moviePoster: action.value
    }
  }
  else if(action.type == "ADD_MOVIE") {
    return {
      ...state,
      movies : state.movies.concat(action.payload)
    }
  }
  else if(action.type == "DELETE_MOVIE") {
    return {
      ...state,
      movies : state.movies.filter(movie => movie !== action.payload)
    }
  }




  return state

}

export default reducer
