import React from 'react';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const productId = Math.floor(Math.random() * (max - min + 1) + min);
  console.log('random productId:', productId);
  return productId;
};

const TempTopBanner = ({randomizerCb}) => {

  const clickHandler = () => {
    randomizerCb(getRandomIntInclusive(59553, 59700).toString());
  };

  return (
    <div id='top_banner'>
      <div id='top_bar'>
        <h3>STORE LOGOTYPE</h3>
        <h3 onClick={clickHandler}>SEARCH</h3>
      </div>
      <p id='announcements'>
        announcements *** Click search to change product! *** announcements
      </p>
    </div>
  );
};

export default TempTopBanner;
