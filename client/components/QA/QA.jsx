import React from 'react';
import Search from './Search.jsx';
import Q_A from './Q_A.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render () {
    return (
      <div>
        <div className='module_container'>Testing QA Compoonent</div>
        <Search/>
        <Q_A/>
        <button>More Questions</button>
        <button>Add Questions</button>
      </div>
    );
  }
}

export default QA;