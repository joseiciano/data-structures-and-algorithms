import React from 'react';
import MainTemplate from './templates/MainTemplate';

const Home = () => {
  return (
    <div>
      <h2>Homepage</h2>
    </div>
  );
};

const HomePage = () => {
  const Screen = Home();
  return (
    <div>
      <MainTemplate screen={Screen} />
    </div>
  );
};

export default HomePage;
