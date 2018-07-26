import * as actionTypes from '../actionTypes'

const initialState = {
  cart : [],
  total : 0
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart : state.cart.concat(action.movie),
        total : state.total += parseInt(action.movie.Year)
      }

    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        cart : state.cart.filter(movie => movie !== action.movie),
        total : state.total -= parseInt(action.movie.Year)
      }
  }

  return state
}

export default reducer
