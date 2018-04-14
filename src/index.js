import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';

import store from 'reduxFiles/store';
import App from 'components/App'
import HomePage from 'components/HomePage';
import OtherPage from 'components/OtherPage';

import './styles/icons/style.css';
import './styles/bootstrap/css/bootstrap.min.css';
import './styles/bootstrap/css/bootstrap-grid.css';
import './styles/index.scss';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="test" component={OtherPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
