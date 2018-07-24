import React, {Component} from 'react'
import {connect} from 'react-redux'

export class MovieList extends Component {

  constructor(props){
    super(props)
  }



  render() {

    let movieList = this.props.results.map((movie, index) => {
      return (
        <li key={index}>
        <h2>{movie.movieTitle}</h2>
        <img src={movie.moviePoster} alt={movie.movieTitle} />
        </li>
      )
    })
    return(
      <div>
        <h1>Movie List</h1>
        <button onClick={this.props.onAddMovie}>ADD MOVIE</button>

        <ul>
          {movieList}
          <button>Delete Movie</button>
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
    onAddMovie : () => dispatch({type : "ADD_MOVIE", payload : {movieTitle : 'Jurassic Park', moviePoster : 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg'}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
