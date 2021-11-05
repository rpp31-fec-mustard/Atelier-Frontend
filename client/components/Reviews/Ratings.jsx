import React from 'react';
import Stars from '../Global/Stars.jsx';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: '0'
    };
  }

  getOverallRating(rating) {
    if (typeof rating === 'number') {
      rating = Math.round(rating * 10) / 10;
      this.setState({
        overallRating: rating
      });
    }
  }

  getPercentRecommend() {
    if (this.props.meta.recommended) {
      let falseCount = Number(this.props.meta.recommended.false);
      let trueCount = Number(this.props.meta.recommended.true);
      let total = falseCount + trueCount;
      let percent = Math.round((this.props.meta.recommended.true / total) * 100);
      if (percent) {
        return percent + '% of reviews recommend this product';
      }
    }
  }

  render() {
    return (
      <div className='ratings_container'>
        <h1> Ratings Breakdown </h1>
        <div className='overall'>
          <section className='overallRating'> {this.state.overallRating}
            <section className='starScale'>
              <Stars rating={this.props.rating} getRating={this.getOverallRating.bind(this)} productId={this.props.productId} />
            </section>
          </section>
          <section className='percentRecommend'>{this.getPercentRecommend()}</section>
        </div>
        <div className='starBreakdown'>
          Star Breakdown
          <div className='star'>
            <div className='numStar' onClick={this.props.handleChange.bind(this)}>5 stars:</div>
            <span className='hoverMessage'>filter by 5 stars</span>
            <progress className="star_bar" max="100" value="90"> 70% </progress>
          </div>
          <div className='star' >
            <div className='numStar' onClick={this.props.handleChange.bind(this)}>4 stars:</div>
            <span className='hoverMessage'>filter by 4 stars</span>
            <progress className="star_bar" max="100" value="10"></progress>
          </div>
          <div className='star'>
            <div className='numStar' onClick={this.props.handleChange.bind(this)}>3 stars:</div>
            <span className='hoverMessage'>filter by 3 stars</span>
            <progress className="star_bar" max="100" value="0"></progress>
          </div>
          <div className='star' >
            <div className='numStar' onClick={this.props.handleChange.bind(this)}>2 stars:</div>
            <span className='hoverMessage'>filter by 2 stars</span>
            <progress className="star_bar" max="100" value="0"></progress>
          </div>
          <div className='star' >
            <div className='numStar' onClick={this.props.handleChange.bind(this)}>1 stars:</div>
            <span className='hoverMessage'>filter by 1 star</span>
            <progress className="star_bar" max="100" value="0"></progress>
          </div>
        </div>
        <div className='productBreakdown'>Product Breakdown</div>
      </div>
    );
  }
}


export default Ratings;

