
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel
 */

require('./bootstrap');
require('./function_menu');
require('../../../node_modules/view-port-checked/jquery.viewportchecker.min');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Main from './components/Main';
import Main_Page from './components/Main_Page';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';



render(<Main />, document.getElementById('content'));

render(
  	<Router history={browserHistory}>
      <Route path="/" component={Main} >
        <Route path="/home" component={Main_Page} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </Route>
    </Router>,
        document.getElementById('content'));
