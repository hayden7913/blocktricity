import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';

import store from 'reduxFiles/store';
import App from 'components/hello-world/App'
import HomePage from 'components/hello-world/HomePage';
import TestPage from 'components/hello-world/TestPage';

import './styles/index.scss';
import './styles/icons/style.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="test" component={TestPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
