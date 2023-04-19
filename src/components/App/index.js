import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';

import { Wrapper, GlobalStyle } from './styles.js';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};
export default App;