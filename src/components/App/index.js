import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';

import { Wrapper, GlobalStyle } from './styles.js';

const App = () => {
  return (
    <Router>
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

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};
export default App;