import React from 'react';
import Search from './Search.jsx';
import Q_A from './Q_A.jsx';
import $ from 'jquery';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product,
      questions: []
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/questions',
      success: (data) => {
        console.log('SUCCESS DATA GETTING QUESTIONS:', data);
        this.setState({
          questions: data
        })
      },
      error: (error) => {
        console.log('ERROR GETTING DATA:', error);
      }
    })
  }

  render () {
    return (
      <div className="module_container">
        <h1>QUESTIONS & ANSWERS</h1>
        <Search/>
        <Q_A product={this.state.product_id} questions={this.state.questions}/>
      </div>
    );
  }
}

export default QA;