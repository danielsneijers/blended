import React from 'react';
import { Router, Route } from 'react-router';
import Main from './components/main';
import Overview from './components/overview';
import Slide from './components/slide';


export default (
	<Route name="root" path="/" handler={Main}>
		<Route name="slides" handler={Overview}>
    	<Route name="/:id" handler={Slide} />
    </Route>
  </Route>
);