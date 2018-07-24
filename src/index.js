import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import {createStore} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App>
        <Switch>
          <Route exact path = '/' component = {MovieList} />
          <Route path = '/addmovie' component = {AddMovie} />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
