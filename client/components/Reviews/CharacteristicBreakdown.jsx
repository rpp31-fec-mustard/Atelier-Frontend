import React from 'react';

const charMeanings = {
  Size: ['too small', 'perfect', 'too big'],
  Width: ['too narrow', 'perfect', 'too wide'],
  Comfort: ['uncomfortable', 'ok', 'perfect'],
  Quality: ['poor', 'what I expected', 'great'],
  Length: ['too short', 'perfect', 'too long'],
  Fit: ['too tight', 'perfect', 'too long'],
};


const displayMeaning = (char) => {
  for (var storedChar in charMeanings) {
    if (char === storedChar) {
      return (
        <section className='ratingMeaning'>
          <section>{charMeanings[char][0]}</section>
          <section>{charMeanings[char][1]}</section>
          <section>{charMeanings[char][2]}</section>
        </section>
      );
    }
  }
};

const getRatingPercent = (rating) => {
  return ((rating / 5) * 100) + '%';
};

const CharacteristicBreakdown = (props) => {

  let style = {
    left: getRatingPercent(props.rating)
  };

  return (
    <div className='charRatingEntry'>
      <section className='characteristicName'> {props.char} </section>
      <section className='pBreakdownScale'>
        <section className='innerBar'></section>
        <section className='innerBar'></section>
        <section className='innerBar'></section>
        <i className="fas fa-caret-down indicator" style={style}></i>
      </section>
      {displayMeaning(props.char)}
    </div>
  );
};

export default CharacteristicBreakdown;