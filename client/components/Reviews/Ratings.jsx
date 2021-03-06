import React from 'react';
import Stars from '../Global/Stars.jsx';
import StarAverageEntry from './StarAverageEntry.jsx';
import CharacteristicBreakdown from './CharacteristicBreakdown.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      overallRating: '0',
      starAverages: [],
      characteristics: [],
      total: '0'
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

  orderRatings() {
    let averages = this.props.meta.ratings;
    let storedAverages = new Array(5).fill(0);
    for (var key in averages) {
      if (key === '5') {
        storedAverages[0] = averages[key];
      } else if (key === '4') {
        storedAverages[1] = averages[key];
      } else if (key === '3') {
        storedAverages[2] = averages[key];
      } else if (key === '2') {
        storedAverages[3] = averages[key];
      } else if (key === '1') {
        storedAverages[4] = averages[key];
      }
    }
    this.setState({
      starAverages: storedAverages,
      productId: this.props.meta.product_id,
    });
  }

  orderCharRatings(char) {
    let ratingStorage = [];
    for (var key in char) {
      let ratingEntry = {};
      ratingEntry[key] = Number(char[key].value).toFixed(2);
      ratingStorage.push(ratingEntry);
    }
    this.setState({
      characteristics: ratingStorage
    });
  }

  componentDidMount() {
    if (this.state.productId) {
      this.orderRatings();
      this.orderCharRatings(this.props.meta.characteristics);
      this.setState({
        total: this.props.total
      });
    }
  }

  componentDidUpdate() {
    if ((this.state.productId !== this.props.meta.product_id) || this.state.total !== this.props.total) {
      this.orderCharRatings(this.props.meta.characteristics);
      this.orderRatings();
      this.setState({
        total: this.props.total
      });
    }
  }

  render() {
    return (
      <div className='ratings_container'>
        <div className='ratingsContent'>
          <div className='overall'>
            <section className='overallRating'> {this.state.overallRating}
              <section className='starScale'>
                <Stars getRating={this.getOverallRating.bind(this)} productId={this.state.productId} total={this.state.total} />
              </section>
            </section>
            <section className='percentRecommend'>{this.getPercentRecommend()}</section>
          </div>
          <div className='starBreakdown'>
            {this.state.starAverages.map((average, i) => {
              return (
                <StarAverageEntry total={this.props.total} key={i} star={i + 1} average={average} handleChange={this.props.handleChange} />
              );
            })}
          </div>
          <div className='productBreakdown'>
            {this.state.characteristics.map((characteristic, i) => {
              let char = Object.keys(characteristic)[0];
              return (
                <CharacteristicBreakdown key={i} char={char} rating={characteristic[char]}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Ratings;
