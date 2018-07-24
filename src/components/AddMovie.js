import React, {Component} from 'react'
import {connect} from 'react-redux'

class AddMovie extends Component {

  render() {
    return(
      <div>
        <input onChange={this.addMovieTitleChange} type='text' placeholder="movie title" />
        <input onChange={this.addMovieImageChange} type='text' placeholder='movie image url' />
        <button>Add Movie</button>

      </div>
    )
  }
}


export default connect()(AddMovie)
