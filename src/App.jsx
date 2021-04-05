import React from 'react';
import GlobalStyle from './view/global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

/* ===== PAGES ===== */
import Login from './view/login';
import Home from './view/home';
import Repos from './view/repos';
import Followers from './view/follow/followers';
import Following from './view/follow/following';
/* ===== /PAGES ===== */

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <Switch>
            <Route exact path = '/' component = {Login} />
            <Route path = '/home' component = {Home} />
            <Route path = '/repos' component = {Repos} />
            <Route path = '/followers' component = {Followers} />
            <Route path = '/following' component = {Following} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
