import React from 'react';

class CharacteristicReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      selected: 'none selected'
    };
  }

  onCharacteristicChange(e) {
    this.setState({
      rating: e.target.value,
      selected: ''
    });
  }

  render() {
    return (
      <div className='modal_input'>
        <section className='selected'> {this.state.selected} </section>
        <div className='modal_characteristics'>
          {this.props.characteristic}<sup>*</sup>
          <section className='test'>
            <input className='charInput' type="radio" value="1" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '1'} required/> 1
            <p>a size too small</p>
          </section>
          <section className=''>
            <input className='charInput' type="radio" value="2" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '2'} /> 2
            <p>½ a size too small</p>
          </section>
          <section className='test'>
            <input className='charInput' type="radio" value="3" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '3'} /> 3
            <p>Perfect</p>
          </section>
          <section className='test'>
            <input className='charInput' type="radio" value="4" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '4'} /> 4
            <p>½ a size too big</p>
          </section>
          <section className='test'>
            <input className='charInput' type="radio" value="5" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '5'} /> 5
            <p>A size too wide</p>
          </section>
        </div>
      </div>
    );
  }
}


export default CharacteristicReview;