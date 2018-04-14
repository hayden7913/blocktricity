import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './components/App'
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';

// import './styles/bootstrap/css/bootstrap.min.css';
// import './styles/bootstrap/css/bootstrap-grid.css';
import 'semantic-ui-css/semantic.min.css';
import './styles/icons/style.css';
import './styles/index.scss';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DashboardPage}/>
        <Route path="/profile" component={ProfilePage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
