import React from 'react';
import { Router, DefaultRoute, Route } from 'react-router';
import Main from './components/main';
import NewPresentation from './components/newPresentation';
import PageContent from './components/pageContent';


export default (
	<Route path="/" handler={Main}>
    <DefaultRoute handler={PageContent} />
    <Route path="/start" handler={NewPresentation} />
		<Route path="/slide/:id" handler={PageContent} />
  </Route>
);