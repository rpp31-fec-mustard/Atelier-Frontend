import React from 'react';
import Search from './Search.jsx';
import Q_A from './Q_A.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product,
      questions: [{
        "question_id": 513709,
        "question_body": "Does this product run big or small?",
        "question_date": "2019-01-17T00:00:00.000Z",
        "asker_name": "jbilas",
        "question_helpfulness": 8,
        "reported": false,
        "answers": {}
    },
    {
        "question_id": 513711,
        "question_body": "Can I wash it?",
        "question_date": "2018-02-08T00:00:00.000Z",
        "asker_name": "cleopatra",
        "question_helpfulness": 7,
        "reported": false,
        "answers": {
            "4811951": {
                "id": 4811951,
                "body": "I've thrown it in the wash and it seems fine",
                "date": "2018-02-08T00:00:00.000Z",
                "answerer_name": "marcanthony",
                "helpfulness": 8,
                "photos": []
            },
            "4811969": {
                "id": 4811969,
                "body": "It says not to",
                "date": "2018-03-08T00:00:00.000Z",
                "answerer_name": "ceasar",
                "helpfulness": 0,
                "photos": []
            },
            "4812001": {
                "id": 4812001,
                "body": "I wouldn't machine wash it",
                "date": "2018-03-08T00:00:00.000Z",
                "answerer_name": "ceasar",
                "helpfulness": 0,
                "photos": []
            },
            "4812006": {
                "id": 4812006,
                "body": "Only if you want to ruin it!",
                "date": "2018-03-08T00:00:00.000Z",
                "answerer_name": "ceasar",
                "helpfulness": 5,
                "photos": []
            },
            "4812012": {
                "id": 4812012,
                "body": "Yes",
                "date": "2018-03-08T00:00:00.000Z",
                "answerer_name": "Seller",
                "helpfulness": 4,
                "photos": []
            }
        }
    },
    {
        "question_id": 513710,
        "question_body": "How long does it last?",
        "question_date": "2019-07-06T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 6,
        "reported": false,
        "answers": {
            "4811970": {
                "id": 4811970,
                "body": "It runs small",
                "date": "2019-11-17T00:00:00.000Z",
                "answerer_name": "dschulman",
                "helpfulness": 1,
                "photos": [
                    "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
                    "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                ]
            },
            "4811994": {
                "id": 4811994,
                "body": "Showing no wear after a few months!",
                "date": "2019-09-06T00:00:00.000Z",
                "answerer_name": "sillyguy",
                "helpfulness": 8,
                "photos": []
            }
        }
    },
    {
        "question_id": 513707,
        "question_body": "What fabric is the top made of?",
        "question_date": "2018-01-04T00:00:00.000Z",
        "asker_name": "yankeelover",
        "question_helpfulness": 1,
        "reported": false,
        "answers": {
            "4811910": {
                "id": 4811910,
                "body": "Something pretty soft but I can't be sure",
                "date": "2018-01-04T00:00:00.000Z",
                "answerer_name": "metslover",
                "helpfulness": 5,
                "photos": [
                    "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                    "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                    "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
                ]
            },
            "4811912": {
                "id": 4811912,
                "body": "Its the best! Seriously magic fabric",
                "date": "2018-01-04T00:00:00.000Z",
                "answerer_name": "metslover",
                "helpfulness": 7,
                "photos": []
            },
            "4811913": {
                "id": 4811913,
                "body": "DONT BUY IT! It's bad for the environment",
                "date": "2018-01-04T00:00:00.000Z",
                "answerer_name": "metslover",
                "helpfulness": 8,
                "photos": []
            },
            "4811962": {
                "id": 4811962,
                "body": "Suede",
                "date": "2018-11-04T00:00:00.000Z",
                "answerer_name": "metslover",
                "helpfulness": 7,
                "photos": []
            },
            "4812000": {
                "id": 4812000,
                "body": "Supposedly suede, but I think its synthetic",
                "date": "2018-12-04T00:00:00.000Z",
                "answerer_name": "metslover",
                "helpfulness": 3,
                "photos": []
            }
        }
    }]
    };
  }

  render () {
    return (
      <div className="module_container">
        <h1>QUESTIONS & ANSWERS</h1>
        <Search/>
        <Q_A product={this.state.product_id} questions={this.state.questions}/>
        <button>More Questions</button>
        <button>Add Questions</button>
      </div>
    );
  }
}

export default QA;