import React from 'react';

const FilterDisplay = (props) => {
  if (props.filters.length) {
    return (
    <div className='filter'>
      <section className='filterTitle'>
        Active Filters:
      </section>
      {props.filters.map((filter, i) => {
        return (
          <section className='filterMessage' key={i} >{filter} Stars</section>
        )
      })}
      <a href='/' onClick={props.remove}> remove filters </a>
    </div>
    )
  } else {
    return <div></div>
  }
}



export default FilterDisplay;