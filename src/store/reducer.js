const initialState = {
  movies : [{movieTitle : 'Toy Story', moviePoster : 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY1000_SX670_AL_.jpg'}],
}

const reducer = (state = initialState, action) => {

  if(action.type == "ADD_MOVIE") {
    return {
      ...state,
      movies : state.movies.concat(action.payload)
    }
  }

  return state

}

export default reducer
