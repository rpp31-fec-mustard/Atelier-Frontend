import React from 'react';
import axios from 'axios';
// import track from 'react-tracking';
import Search from './Search.jsx';
import Q_A from './Q_A.jsx';
// import trackPost from '../Reviews/trackPost.jsx';

// @track({widget: 'Question and Answers'}, { dispatch: data => {
//   trackPost(data)
// }})

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.product,
      productInfo: this.props.productInfo,
      questions: [],
      search: ''
    };
  }

  componentDidMount() {
    this.getQuestions(this.state.productId);
  }

  componentDidUpdate () {
    if ((this.state.productInfo !== this.props.productInfo) || (this.state.productId !== this.props.product)) {
      this.setState({
        productInfo: this.props.productInfo,
        productId: this.props.product
      });
      this.getQuestions(this.state.productId);
    }
  }

  searchQuestions (value) {
    this.setState({
      search: value
    });
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
      <div id="qa-module" className="module_container">
        <div className="qa-title">
          <h3>QUESTIONS & ANSWERS</h3>
        </div>
        <div className="qa-search">
          <Search searchQuestions={this.searchQuestions.bind(this)}/>
        </div>
        <div className="qa-list">
          <Q_A
            product={this.state.productId}
            questions={this.state.questions}
            productInfo={this.state.productInfo}
            filter={this.state.search}
            update={this.componentDidMount.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default QA;