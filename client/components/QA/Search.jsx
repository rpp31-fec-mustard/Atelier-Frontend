import React, { useEffect } from 'react';

const Search = (props) => {

  const performSearch = (e) => {
    props.searchQuestions(e.target.value);
  };


  return (
    <div className="search">
      <textarea onChange={(e) => performSearch(e)} type="text" cols="144" maxlength="200" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></textarea>
    </div>
  );

};

export default Search;