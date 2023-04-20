import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';
import Header from '../Header';

import { Wrapper, GlobalStyle } from './styles.js';
import { open } from '../../utils/indexdb.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    open()
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <Wrapper>
          <GlobalStyle />
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </Wrapper>
      </Router>
    );
  }
}

export default App;