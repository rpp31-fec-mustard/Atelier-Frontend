import React from 'react';
import Stars from '../Global/Stars.jsx';
import StarAverageEntry from './StarAverageEntry.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: '0',
      isLoaded: false
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

  componentDidMount() {
    if (this.props.meta.ratings) {
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
        isLoaded: true
      });
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className='ratings_container'>
          <h3> Ratings Breakdown </h3>
          <div className='ratingsContent'>
            <div className='overall'>
              <section className='overallRating'> {this.state.overallRating}
                <section className='starScale'>
                  <Stars rating={this.props.rating} getRating={this.getOverallRating.bind(this)} productId={this.props.productId} />
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
              <div className='charRatingEntry'>
                <section className='characteristicName'> size </section>
                <section className='pBreakdownScale'>
                  <section className='innerBar'></section>
                  <section className='innerBar'></section>
                  <section className='innerBar'></section>
                  <i className="fas fa-caret-down indicator"></i>
                </section>
                <section className='ratingMeaning'>
                  <section>too small</section>
                  <section>perfect</section>
                  <section>too big</section>
                </section>
              </div>
              <div className='charRatingEntry'>
                <section className='characteristicName'> comfort </section>
                <section className='pBreakdownScale'>
                  <section className='innerBar'></section>
                  <section className='innerBar'></section>
                  <section className='innerBar'></section>
                  <i className="fas fa-caret-down indicator"></i>
                </section>
                <section className='ratingMeaning'>
                  <section>poor</section>
                  <section>perfect</section>
                  <section>great</section>
                </section>
              </div>
              <div className='charRatingEntry'>
                <section className='characteristicName'> fit </section>
                <section className='pBreakdownScale'>
                  <section className='innerBar'></section>
                  <section className='innerBar'></section>
                  <section className='innerBar'></section>
                  <i className="fas fa-caret-down indicator"></i>
                </section>
                <section className='ratingMeaning'>
                  <section>too small</section>
                  <section>perfect</section>
                  <section>too big</section>
                </section>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default Ratings;



