import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';
import Users from './routes/Users';
import MenuPage from './routes/MenuPage';
import RegPage from './routes/RegPage';


/* eslint react/prop-types:0 */
export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage} />
      <Route path="/users" component={Users} />
      <Route path="/menuList" component={MenuPage}/>
      <Route path="/reg" component={RegPage}/>
      <Route path="*" component={NotFound} />
    </Router>
  );
}
