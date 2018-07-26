import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class Movies extends Component {

  render() {

    let movieList = this.props.movies.map((movie, index) => {
      return (
        <li key={index}>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
        <p>${movie.price}</p>
        <button onClick={() => {this.props.addMovieToCart(movie)}}>Add to Cart</button>
        </li>
      )
    })

    return(
      <div id="movies">
        <h1>Movie List</h1>

        <div>{movieList}</div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies : state.movieReducer.movies,
    cart : state.cartReducer.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieToCart : (movie) => dispatch(actionCreators.addMovieToCart(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
