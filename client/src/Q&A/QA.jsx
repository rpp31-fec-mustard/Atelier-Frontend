import React from 'react';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render () {
    return (
      <div>
        <div>Testing QA Compoonent</div>
        <button>More Questions</button>
        <button>Add Questions</button>
      </div>
    );
  }
}

export default QA;