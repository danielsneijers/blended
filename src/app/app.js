import React from 'react';
import Router from 'react-router';
import Routes from './routes';

window.AppRouter = Router.run(Routes, Router.HistoryLocation, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
});