import React, { useEffect } from 'react';

const Search = (props) => {

  const performSearch = (e) => {
    props.searchQuestions(e.target.value);
  };


  return (
    <div className="search">
      <input onChange={(e) => performSearch(e)} type="text" size="60" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
    </div>
  );

};

export default Search;