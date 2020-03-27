import React, { Fragment } from 'react';
import Slider from '../home/Slider';
import WhereTo from '../home/WhereTo';
import PopularGames from '../home/PopularGames';
import Subscribe from '../home/Subscribe';
import SiteInfo from '../home/SiteInfo';

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <WhereTo />

      <PopularGames />

      <Subscribe />
      <SiteInfo />
    </Fragment>
  );
};

export default Home;
