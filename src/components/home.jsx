import React from 'react';
import Trending from './trending';
import Header from './header';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Trending />
    </div>
  );
};

export default Home;