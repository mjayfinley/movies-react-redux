import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../store/actionCreators'

export class Cart extends Component {
  render() {

    let cartList = this.props.cart.map((movie, index) => {
      return (
        <li key={index}>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
        <p>${movie.price}</p>
        <button onClick={() => {this.props.deleteMovie(movie)}}>Delete Movie</button>
        </li>
      )
    })


    return(
      <div>
        <h1>Cart List</h1>


        <ul>
          {cartList}
        </ul>

        <div>
          Cart Total: ${this.props.total}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies : state.movieReducer.movies,
    cart : state.cartReducer.cart,
    total : state.cartReducer.total
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie : (movie) => {dispatch({type : "DELETE_MOVIE", payload: movie})},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
