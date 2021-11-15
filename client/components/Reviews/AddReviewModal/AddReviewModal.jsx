import React from 'react';
import ReviewRecommend from './ReviewRecommend.jsx';
import CharacteristicReview from './CharacteristicReview.jsx';
import AddReviewThumbnail from './AddReviewThumbnail.jsx';
import StarRating from './StarRating.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.meta.product_id,
      recommend: '',
      charsLeft: '50',
      allImages: [],
      selectedImg: '',
      rating: '',
    };
  }

  onRecommendChange(e) {
    this.setState({
      recommend: e.target.value
    });
  }

  handleChange(e) {
    if (e.target.value.length <= 50) {
      this.setState({
        charsLeft: 50 - e.target.value.length
      });
    }
  }

  display() {
    if (this.state.charsLeft === 0) {
      return <p>Minimum Reached!</p>;
    } else {
      return <p>{this.state.charsLeft} characters left</p>;
    }
  }

  onImageChange(e) {
    let url = URL.createObjectURL(e.target.files[0]);
    this.setState({
      selectedImg: url,
      allImages: this.state.allImages.concat(url)
    });
  }

  handleSubmit(e, images) {
    e.preventDefault();
    let result = {};
    let characteristics = {};
    result['product_id'] = Number(this.state.productId);
    result['sort'] = this.props.sort;
    result['rating'] = Number(this.state.rating);
    for (var i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].name) {
        if (e.target.elements[i].type === 'radio' && e.target.elements[i].checked) {
          let name = e.target.elements[i].name;
          if (name !== 'recommend' && name !== 'rating') {
            characteristics[name] = Number(e.target.elements[i].value);
            result.characteristics = characteristics;
          } else {
            result[name] = e.target.elements[i].value;
          }
        } else if (e.target.elements[i].type === 'file') {
          let name = e.target.elements[i].name;
          result[name] = images;
        } else if (e.target.elements[i].type !== 'radio') {
          let name = e.target.elements[i].name;
          result[name] = e.target.elements[i].value;
        }
      }
    }
    console.log('sent', result);
    this.props.post(result).then((res) => {
      this.props.close();
    });
  }

  componentDidUpdate() {
    if (this.state.productId !== this.props.meta.product_id) {
      this.setState({
        productId: this.props.meta.product_id
      });
    }
  }

  getRating(rating) {
    this.setState({
      rating: rating
    });
  }

  render() {
    if (this.props.show) {
      return (
        <div className='modal'>
          <form className='modal_content' onSubmit={(e) => { this.handleSubmit(e, this.state.allImages); } } >
            <div onClick={this.props.close}>X</div>
            <h2 className='modal_title'>Write Your Review</h2>
            <h4 className='subtitle'> About {this.props.productInfo.name}</h4>
            <section className='modal_rating'>
              Overall Rating:<sup>*</sup>
              <StarRating getRating={this.getRating.bind(this)} required />
            </section>
            <ReviewRecommend onChange={this.onRecommendChange.bind(this)} recommend={this.state.recommend} required/>
            {Object.keys(this.props.meta.characteristics).map((key, i) => {
              return (
                <CharacteristicReview
                  key={i}
                  characteristic={key}
                  meta={this.props.meta.characteristics[key]}
                  required
                />
              );
            })}
            <section className="addReviewSummary">
              <label>Review Summary: </label>
              <section>
                <textarea name='summary' maxLength="60" rows="2" cols="60" placeholder="Example: Best purchase ever!"></textarea>
              </section>
            </section>
            <section className="addReviewBody">
              <label>Your Review:<sup>*</sup></label>
              <section>
                <textarea name='body' onChange={this.handleChange.bind(this)} maxLength="1000" minLength="50" rows="3" cols="70" placeholder="Why did you like the product or not?" required></textarea>
                {this.display()}
              </section>
              {this.state.allImages.length === 5 ? null : <input type="file" name="photos" onChange={this.onImageChange.bind(this)} />}
              <section className='uploadedImages'>
                {this.state.allImages.map((url, i) => {
                  return (
                    <AddReviewThumbnail key={i} url={url} />
                  );
                })}
              </section>
            </section>
            <section className="reviewNickName">
              <label>Nickname:<sup>*</sup> </label>
              <section>
                <textarea name='name' maxLength="60" rows="1" cols="40" placeholder="Example: jackson11!" required></textarea>
                <p>For privacy reasons, do not use your full name or email address</p>
              </section>
            </section>
            <section className="reviewEmail">
              <label>Email:<sup>*</sup> </label>
              <section>
                <textarea name='email' maxLength="60" rows="1" cols="40" placeholder="Example: jackson11@email.com" required></textarea>
                <p>For authentication reasons, you will not be emailed</p>
              </section>
            </section>
            <button >Submit</button>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}


export default Modal;