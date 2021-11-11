import React from 'react';
import ReviewRecommend from './ReviewRecommend.jsx';
import CharacteristicReview from './CharacteristicReview.jsx'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommend: ''
    }
  }

  onRecommendChange(e) {
    this.setState({
      recommend: e.target.value
    });
  }


  render() {
    if (this.props.show) {
      return (
        <div className='modal'>
          <section className='modal_content'>
            <button onClick={this.props.close}>X</button>
            <h2 className='modal_title'>Write Your Review</h2>
            <h4 className='subtitle'> About the [Product Name]</h4>
            <section className='modal_rating'> Star Rating: </section>
            <ReviewRecommend onChange={this.onRecommendChange.bind(this)} recommend={this.state.recommend} />
            {Object.keys(this.props.meta.characteristics).map((key, i) => {
              return (
                <CharacteristicReview
                  key={i}
                  characteristic={key}
                  meta={this.props.meta.characteristics[key]}
                />
              )
            })}
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}


export default Modal;