import React, {Component} from 'react'
import {connect} from 'react-redux'

export class MovieList extends Component {



  render() {

    let movieList = this.props.results.map((movie, index) => {
      return (
        <li key={index}>
        <h2>{movie.movieTitle}</h2>
        <img src={movie.moviePoster} alt={movie.movieTitle} />
        <button onClick={() => {this.props.deleteMovie(movie)}}>Delete Movie</button>
        </li>
      )
    })
    return(
      <div>
        <h1>Movie List</h1>

        <input onChange={this.props.addMovieTitleChange} type='text' placeholder="movie title" />
        <input onChange={this.props.addMovieImageChange} type='text' placeholder='movie image url' />
        <button onClick={() => {this.props.onSaveMovie(this.props.title, this.props.poster)}}>Add Movie</button>


        <ul>
          {movieList}

        </ul>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    results : state.movies,
    title : state.movieTitle,
    poster : state.moviePoster
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieTitleChange : (e) => dispatch({type : "ADD_MOVIE_TITLE", value : e.target.value}),
    addMovieImageChange : (e) => dispatch({type : "ADD_MOVIE_IMAGE", value : e.target.value}),
    onSaveMovie : (title, poster) => dispatch({type : "ADD_MOVIE", payload: {movieTitle : title, moviePoster : poster}}),
    deleteMovie : (movie) => {
      console.log(movie)
      dispatch({type : "DELETE_MOVIE", payload: movie})

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
