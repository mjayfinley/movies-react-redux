import * as actionTypes from '../actionTypes'

const initialState = {
  movies : []
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movies : state.movies.concat(action.movie)
      }

    case actionTypes.POPULATE_MOVIES:
      return {
        ...state,
        movies : action.movies
      }
  }

  return state
}

export default reducer
