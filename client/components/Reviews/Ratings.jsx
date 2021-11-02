import React from 'react';
import Stars from '../Global/Stars.jsx'


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: '0'
    }
  }

  getOverallRating(rating) {
    rating = Math.round(rating * 10) / 10
    this.setState({
      overallRating: rating
    })
  }


  render() {
    return (
      <div className='ratings_container'>
        <h1> Ratings Breakdown </h1>
        <div className='overall'>
          <section className='overallRating'> {this.state.overallRating} </section>
          <section className='starScale'>
          <Stars getOverallRating={this.getOverallRating.bind(this)} productId={this.props.productId} />
          </section>
        </div>
        <div className='starBreakdown'>
          Star Breakdown
          <div className='star' onClick={this.props.handleChange.bind(this)}>5 stars:
            <progress className="star_bar" max="100" value="70"> 70% </progress>
          </div>
          <div className='star' onClick={this.props.handleChange.bind(this)}>4 stars:  <progress className="star_bar" max="100" value="90"></progress>
          </div>
          <div className='star' onClick={this.props.handleChange.bind(this)}>3 stars:  <progress className="star_bar" max="100" value="30"></progress>
          </div>
          <div className='star' onClick={this.props.handleChange.bind(this)}>2 stars:  <progress className="star_bar" max="100" value="50"></progress>
          </div>
          <div className='star' onClick={this.props.handleChange.bind(this)}>1 stars:  <progress className="star_bar" max="100" value="20"></progress>
          </div>
        </div>
        <div className='productBreakdown'>Product Breakdown</div>
      </div>
    );
  }
}


export default Ratings;

