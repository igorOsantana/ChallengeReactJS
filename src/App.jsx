import React from 'react';
import GlobalStyle from './view/global';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

/* ===== PAGES ===== */
import Login from './view/login';
import Home from './view/home';
/* ===== /PAGES ===== */

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Route exact path = '/' component = {Login} />
        <Route exact path = '/home' component = {Home} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
