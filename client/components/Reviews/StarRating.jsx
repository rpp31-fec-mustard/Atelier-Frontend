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

  render() {

    return (
      <div className='modalStars'>
        {[...Array(5)].map((star, i) => {
          return (
            <label key={i} >
              <input className='starRadio' type='radio' value={i + 1} onClick={this.handleClick.bind(this)} >
              </input>
              <i className="fas fa-star"
                style={i + 1 <= (this.state.hover || this.state.rating) ? {color: 'black'} : {color: 'lightgray'}}
                onMouseEnter={() => { this.setState({hover: i + 1}); } }
                onMouseLeave={() => { this.setState({hover: null}); } }
              ></i>
            </label>
          );
        })}
      </div>
    );

  }
}

export default StarRating;