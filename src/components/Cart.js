import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../store/actionCreators'

export class Cart extends Component {
  render() {

    let cartList = this.props.cart.map((movie) => {
      return (
        <li key={movie.imdbID}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p>${movie.Year}</p>
        <button onClick={() => {this.props.onDeleteMovie(movie)}}>Delete Movie</button>
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
    cart : state.cartReducer.cart,
    total : state.cartReducer.total
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteMovie : (movie) => dispatch(actionCreators.deleteMovie(movie)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
