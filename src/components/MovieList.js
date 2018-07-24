import React, {Component} from 'react'
import {connect} from 'react-redux'

export class MovieList extends Component {



  render() {

    let movieList = this.props.results.map((movie, index) => {
      return (
        <li key={index}>
        <h2>{movie.movieTitle}</h2>
        <img src={movie.moviePoster} alt={movie.movieTitle} />
        <button onClick={this.props.deleteMovie}>Delete Movie</button>
        </li>
      )
    })
    return(
      <div>
        <h1>Movie List</h1>


        <ul>
          {movieList}

        </ul>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    results : state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
