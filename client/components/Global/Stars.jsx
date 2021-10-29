import React from 'react';
import axios from 'axios';

let qtrPercent = {
  0: ['8%', '10%', '13%', '20%'],
  1: ['28%', '30%', '33%', '40%'],
  2: ['48%', '50%', '53%', '60%'],
  3: ['68%', '70%', '73%', '80%'],
  4: ['88%', '90%', '93%', '100%']
}

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '0'
    }
  }

  getRatings(option, callback) {
    let options = {
      url: '/getOverallRating',
      params: option,
      method: 'get'
    }
    axios.request(options).then((result) => {
      callback(null, result.data.rating)
    })
    .catch((err) => {
     callback(err, null)
    })
  }

  convertDecimalToQtr(decimal) {
    var buckets = [0.25, 0.5, 0.75, 1];
    for (let i = 0; i < buckets.length - 1; i++) {
      var bucketStart = buckets[i];
      var bucketEnd = buckets[i + 1];

      if (decimal >= bucketStart && decimal < bucketEnd) {
        var diffStart = decimal - bucketStart;
        var diffEnd = bucketEnd - decimal;
        var index;

        if (diffStart > diffEnd) {
          index = i + 1;
          return index;
        } else {
          index = i;
          return index;
        }
      }
    }
  }

  getStarPercent(input) {
    var integer = Math.floor(input);

    if (input === '0') {
      return '0%'
    } else if (input % 1 === 0) {
      return qtrPercent[input - 1][3]
    } else {
      var decimal = Math.round((input - integer) * 100) / 100
      var index = this.convertDecimalToQtr(decimal);
      return qtrPercent[integer][index]
    }
  }

  componentDidMount() {
    this.getRatings(this.props.product_id, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          rating: result
        })
      }
    })
  }

  render() {
    const style = { width: this.getStarPercent(this.state.rating) };
    return (
      <div className='stars-outer'>
        <div className='stars-inner' style={style} > </div>
      </div>
    )
  }
}

export default Stars;




