import React from 'react';

const FilterDisplay = (props) => {
  return (

  <div className='filter'>
    {props.filters.map((filter, i) => {
      return (
        <section className='filterMessage' key={i} >Filtered by {filter} Stars</section>
      )
    })}
  </div>
  )
}

export default FilterDisplay;