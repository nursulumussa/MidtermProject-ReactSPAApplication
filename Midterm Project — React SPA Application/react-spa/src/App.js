import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import Footer from './components/Footer';
import AddItemForm from './components/AddItemForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Home />
      <Footer />
    </div>
  );
}

export default App;