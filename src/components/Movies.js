import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class Movies extends Component {

  componentDidMount() {
    //this.props.onPopulateMovies()
    this.props.onPopulateMovies()
  }

  render() {

    let movieList = this.props.movies.map((movie) => {
      return (
        <li key={movie.imdbID}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p>${movie.Year}</p>
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
    onPopulateMovies : () => dispatch(actionCreators.populateMoviesUsingThunk()),
  //  onPopulateMovies : () => dispatch(actionCreators.populateMoviesUsingThunk()),
    addMovieToCart : (movie) => dispatch(actionCreators.addMovieToCart(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
