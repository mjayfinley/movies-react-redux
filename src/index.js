import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Movies from './components/Movies'
import Cart from './components/Cart'
import AddMovie from './components/AddMovie'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import movie from './store/reducers/movie'
import cart from './store/reducers/cart'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = combineReducers({
  movieReducer : movie,
  cartReducer : cart,
})

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App>
        <Switch>
          <Route exact path = '/' component = {Movies} />
          <Route path = '/addmovie' component = {AddMovie} />
          <Route path = '/cart' component = {Cart} />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
