import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Router,
  RouterProvider,
} from "react-router-dom";

import {Wrapper, GlobalStyle} from './styles.js';

const App = () => {
      return (
        <Router>
        <Wrapper>
          <GlobalStyle/>
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
            <Route path="/">
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
        </Router>
        )
      }

  export default App;