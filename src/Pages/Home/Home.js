import React from 'react';

import classes from './Home.module.css';
import TourInfo from './TourInfo';
const Home = () => {
  const tourInfo = [
    { date: 'JUL 16', place: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
    { date: 'JUL 19', place: 'TORONTO, ON', venue: 'BUDWEISER STAGE' },
    { date: 'JUL 22', place: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
    { date: 'JUL 29', place: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
    { date: 'AUG 2', place: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENAE' },
    { date: 'AUG 7', place: 'CONCORD, CA', venue: 'CONCORD PAVILIONE' },
  ];

  const tourInfoList = tourInfo.map((tour) => (
    <TourInfo
      tour={tour}
      key={Math.random().toString()}
    />
  ))

  return (
    <>
      <div className={classes.div}>
        <h1>The Generics</h1>
        <button>Get Our Latest Album</button>
        <button className={classes['play-button']}>&#9658;</button>
      </div>
      <h2 className={classes.subtitle}>TOURS</h2>
      <div className={classes.tourInfo}>
        {tourInfoList}
      </div>
    </>
  );
};

export default Home;