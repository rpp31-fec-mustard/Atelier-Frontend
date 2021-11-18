import React from 'react';

const charMeanings = {
  Size: ['too small', 'perfect', 'too big'],
  Width: ['too narrow', 'perfect', 'too wide'],
  Comfort: ['uncomfortable', 'ok', 'perfect'],
  Quality: ['poor', 'what I expected', 'great'],
  Length: ['too short', 'perfect', 'too long'],
  Fit: ['too tight', 'perfect', 'too long'],
};


const displayMeaning = (char, num) => {
  for (var storedChar in charMeanings) {
    if (char === storedChar) {
      return (
        <section>{charMeanings[char][num]} </section>
      );
    }
  }
};

const getRatingPercent = (rating) => {
  let percent = (rating / 5) * 100;
  if (percent < 5) {
    return percent + '%';
  } else {
    return (percent - 5) + '%';
  }
};

const CharacteristicBreakdown = (props) => {

  let style = {
    left: getRatingPercent(props.rating)
  };

  return (
    <div className='charRatingEntry'>
      <section className='characteristicName'> {props.char} </section>
      <section className='pBreakdownScale'>
        <section className='innerBar'>
          <section className='first meaning'>
            {displayMeaning(props.char, 0)}
          </section>
        </section>
        <section className='innerBar'>
          <section className='second meaning'>
            {displayMeaning(props.char, 1)}
          </section>
        </section>
        <section className='innerBar'>
          <section className='last meaning'>
            {displayMeaning(props.char, 2)}
          </section>
        </section>
        <i className="fas fa-caret-down indicator" style={style}></i>
      </section>
    </div>
  );
};

export default CharacteristicBreakdown;