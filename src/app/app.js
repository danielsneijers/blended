import React from 'react';
import Router from 'react-router';
import Routes from './routes';

window.AppRouter = Router.run(Routes, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
});