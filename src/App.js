import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import BetComponent from './components/BetComponent';

const App = () => (
  <Router>
    <Header />
    <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bet" element={<BetComponent />} />
        {/* Add other routes here */}
    </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
