import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Menu extends Component {
  render() {
    return(
      <div id="menu">
        <div><NavLink exact to = '/'>Movies</NavLink></div>
        <div><NavLink to = '/addmovie'>Add Movie</NavLink></div>
        <div><NavLink to = '/cart'>Shopping Cart</NavLink></div>

      </div>
    )
  }
}
