import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Container from './routes';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Container />
    </Router>
  );
}

