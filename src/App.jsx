import React from 'react';
import GlobalStyle from './view/global';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

/* ===== PAGES ===== */
import Login from './view/login';
import Home from './view/home';
import Repos from './view/repos';
import Followers from './view/followers';
import Following from './view/following';
/* ===== /PAGES ===== */

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Route exact path = '/' component = {Login} />
        <Route exact path = '/home' component = {Home} />
        <Route exact path = '/repos' component = {Repos} />
        <Route exact path = '/followers' component = {Followers} />
        <Route exact path = '/following' component = {Following} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
