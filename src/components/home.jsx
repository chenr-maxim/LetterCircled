import React from 'react';
import Trending from './trending';
import Header from './header';

const Home = () => {
  return (
    <div> 
      <div className="header-container">
        <Header />
      </div>
      <div className="home-container">
        <Trending />
      </div>
    </div>
  );
};

export default Home;