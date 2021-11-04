import React from 'react';
import Search from './Search.jsx';
import Q_A from './Q_A.jsx';
import axios from 'axios';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.product,
      questions: []
    };
  }

  componentDidMount() {
    this.getQuestions(this.state.productId);
  }

  getQuestions (id) {
    axios.get('/questions', {
      params: {
        productId: id
      }
    })
      .then((result) => {
        this.setState({
          questions: result.data
        });
      })
      .catch((error) => {
        console.log('Error Getting Questions:', error);
      });
  }

  render () {
    return (
      <div className="module_container">
        <h1>QUESTIONS & ANSWERS</h1>
        <Search/>
        <Q_A product={this.state.productId} questions={this.state.questions}/>
      </div>
    );
  }
}

export default QA;