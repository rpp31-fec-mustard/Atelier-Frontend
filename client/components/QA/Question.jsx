import React, { useState } from 'react';
import Answer from './Answer.jsx';

// class Question extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       answers: this.props.answer
//     }
//   }

//   componentDidMount() {
//     console.log('this state:', this.state.answers)
//   }


//   render () {
//     return (
//       <div>
//         {this.state.answers.map((answer) =>
//           <Answer answer={answer}/>
//         )}
//       </div>
//     )
//   }

// };

// const Question = (props) => (
//   <div>
//     Q: {props.question}
//     {props.answer.map((answer, i) =>
//       <Answer key={i} answer={answer}/>
//     )}
//   </div>
// )

const Question = (props) => {
  var keys = [];
  props.answer.map((answer) => {
    keys = Object.keys(answer)
  })

  keys.map((id) => {
    console.log('singleAnswerID:', props.answer[0][id].id, 'singleAnswerHelpfulness', props.answer[0][id].helpfulness)
  })

  const [show, setShow] = useState(false);
  const onClick = () => setShow(true)

  if (keys.length === 0) {
    return (
      <div>
        <div>Q: {props.question}</div>
        <div>NO ANSWER</div>
      </div>
    )
  } else {
    return (
      <div>
        <div>Q: {props.question}</div>
        <div className="answer">
          A: {keys.map((id, i) =>
            <Answer key={i} id={id} answer={props.answer}/>
          )}
        </div>
      </div>
    )
  }

}



export default Question;