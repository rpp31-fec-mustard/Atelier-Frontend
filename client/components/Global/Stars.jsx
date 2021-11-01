// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

let qtrPercent = {
  0: ['8%', '10%', '13%', '20%'],
  1: ['28%', '30%', '33%', '40%'],
  2: ['48%', '50%', '53%', '60%'],
  3: ['68%', '70%', '73%', '80%'],
  4: ['88%', '90%', '93%', '100%']
};

// class Stars extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rating: '0'
//     };
//   }

//   getRatings(option) {
//     let options = {
//       url: '/getOverallRating',
//       params: option,
//       method: 'get'
//     };
//     return axios.request(options).then((result) => {
//       return result.data.rating
//     })
//       .catch((err) => {
//        return err
//       });
//   }

//   convertDecimalToQtr(decimal) {
//     var buckets = [0.25, 0.5, 0.75, 1];
//     for (let i = 0; i < buckets.length - 1; i++) {
//       var bucketStart = buckets[i];
//       var bucketEnd = buckets[i + 1];

//       if (decimal >= bucketStart && decimal < bucketEnd) {
//         var diffStart = decimal - bucketStart;
//         var diffEnd = bucketEnd - decimal;
//         var index;

//         if (diffStart > diffEnd) {
//           index = i + 1;
//           return index;
//         } else {
//           index = i;
//           return index;
//         }
//       }
//     }
//   }

//   getStarPercent(input) {
//     var integer = Math.floor(input);

//     if (input === '0') {
//       return '0%';
//     } else if (input % 1 === 0) {
//       return qtrPercent[input - 1][3];
//     } else {
//       var decimal = Math.round((input - integer) * 100) / 100;
//       var index = this.convertDecimalToQtr(decimal);
//       return qtrPercent[integer][index];
//     }
//   }

//   componentDidMount() {
//     this.getRatings(this.props.productId).then((result) => {
//       this.setState({
//         rating: result
//       });
//     })
//     .catch(err => console.log(err))
//   }

//   render() {
//     const style = { width: this.getStarPercent(this.state.rating) };
//     return (
//       <div className='stars-outer'>
//         <div className='stars-inner' style={style} > </div>
//       </div>
//     );
//   }
// }

const Stars = (props) => {
  const [rating, setRating] = useState('0');

  useEffect(() => {
    let options = {
      url: '/getOverallRating',
      params: props.productId,
      method: 'get'
    };
   axios.request(options).then((result) => {
      setRating(result.data.rating)
    })
      .catch((err) => {
      //  console.log(err)
      });
  },[])

  const convertDecimalToQtr = (decimal) => {
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

  const getStarPercent = (input) => {
    var integer = Math.floor(input);

    if (input === '0') {
      return '0%';
    } else if (input % 1 === 0) {
      return qtrPercent[input - 1][3];
    } else {
      var decimal = Math.round((input - integer) * 100) / 100;
      var index = convertDecimalToQtr(decimal);
      return qtrPercent[integer][index];
    }
  }

    const style = { width: getStarPercent(rating) };
    return (
      <div className='stars-outer'>
        <div className='stars-inner' style={style} > </div>
      </div>
    );
}


//   componentDidMount() {
//     this.getRatings(this.props.productId).then((result) => {
//       this.setState({
//         rating: result
//       });
//     })
//     .catch(err => console.log(err))
//   }

// }
export default Stars;




