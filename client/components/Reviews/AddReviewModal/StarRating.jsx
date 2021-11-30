import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      hover: null
    };
  }

  handleClick(e) {
    this.setState({
      rating: e.target.value
    });
    this.props.getRating(e.target.value);
  }

  displayMeaning(rating) {
    let meanings = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
    return meanings[rating - 1];
  }

  render() {

    return (
      <div className='modalStars'>
        {[...Array(5)].map((star, i) => {
          return (
            <label key={i} >
              <input className='starRadio' name='rating' type='radio' value={i + 1} onClick={this.handleClick.bind(this)} required>
              </input>
              <i className="ri-star-fill"
                style={i + 1 <= (this.state.hover || this.state.rating) ? {color: 'black'} : {color: 'lightgray'}}
                onMouseEnter={() => { this.setState({hover: i + 1}); } }
                onMouseLeave={() => { this.setState({hover: null}); } }
              ></i>
            </label>
          );
        })}
        <span className='selectedStar'>
          {this.displayMeaning(this.state.rating)}
        </span>
      </div>
    );

  }
}

export default StarRating;