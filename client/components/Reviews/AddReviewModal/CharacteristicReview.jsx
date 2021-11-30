import React from 'react';

const meanings = {
  Size: ['A size too small', '½ a size too small', 'perfect', '½ a size too big', 'a size too wide'],
  Width: ['too narrow', 'sligtly narrow', 'perfect', 'slightly wide', 'too wide'],
  Comfort: ['uncomfortable', 'slightly uncomfortable', 'ok', 'comfortable', 'perfect'],
  Quality: ['poor', 'below', 'what I expected', 'pretty great', 'great'],
  Length: ['runs short', 'runs slightly short', 'perfect', 'runs slightly long', 'too long'],
  Fit: ['runs tight', 'runs slightly tight', 'perfect', 'runs slightly long', 'too long']
};

class CharacteristicReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      selected: 'none selected'
    };
  }

  displayMeaning(char, rating) {
    return meanings[char][rating - 1];
  }

  onCharacteristicChange(e) {
    this.setState({
      rating: e.target.value,
      selected: e.target.title
    });
  }

  render() {
    let characteristic = this.props.characteristic;
    let meaningFor1 = this.displayMeaning(characteristic, 1);
    let meaningFor2 = this.displayMeaning(characteristic, 2);
    let meaningFor3 = this.displayMeaning(characteristic, 3);
    let meaningFor4 = this.displayMeaning(characteristic, 4);
    let meaningFor5 = this.displayMeaning(characteristic, 5);

    return (
      <div className='modal_input'>
        <section className='selected'> {this.state.selected} </section>
        <div className='modal_characteristics'>
          {characteristic}<sup>*</sup>
          <section className='ratingSelection'>
            <section className='ratingButton'>
              <p>1</p>
              <input className='charInput' type="radio" value="1" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '1'} title= {meaningFor1} required/>
            </section>
            <p>{meaningFor1}</p>
          </section>
          <section className='ratingSelection'>
            <section className='ratingButton'>
              <p>2</p>
              <input className='charInput' type="radio" value="2" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '2'} title= {meaningFor2} />
            </section>
            <p>{meaningFor2}</p>
          </section>
          <section className='ratingSelection'>
            <section className='ratingButton'>
              <p>3</p>
              <input className='charInput' type="radio" value="3" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '3'} title= {meaningFor3} />
            </section>
            <p>{meaningFor3}</p>
          </section>
          <section className='ratingSelection'>
            <section className='ratingButton'>
              <p>4</p>
              <input className='charInput' type="radio" value="4" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '4'} title= {meaningFor4} />
            </section>
            <p>{meaningFor4}</p>
          </section>
          <section className='ratingSelection'>
            <section className='ratingButton'>
              <p>5</p>
              <input className='charInput' type="radio" value="5" name={this.props.meta.id} onChange={this.onCharacteristicChange.bind(this)} checked={this.state.rating === '5'} title= {meaningFor5} />
            </section>
            <p>{meaningFor5}</p>
          </section>
        </div>
      </div>
    );
  }
}


export default CharacteristicReview;