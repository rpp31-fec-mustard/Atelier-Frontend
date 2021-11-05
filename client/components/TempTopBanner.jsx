import React from 'react';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const productId = Math.floor(Math.random() * (max - min + 1) + min);
  console.log('random productId:', productId);
  return productId;
};

const TempTopBanner = ({randomizer}) => {

  const clickHandler = () => {
    randomizer(getRandomIntInclusive(59553, 59700).toString());
  };

  return (
    <div id='top_banner'>
      <div id='top_bar'>
        <h3>STORE LOGOTYPE</h3>
        <h3 onClick={clickHandler}>SEARCH</h3>
      </div>
      <p id='announcements'>
        announcements announcements announcements announcements
      </p>
    </div>
  );
};

export default TempTopBanner;
