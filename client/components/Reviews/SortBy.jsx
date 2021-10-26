import React from 'react';

class SortBy extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <label> {this.props.list.length} reviews, Sorted by
        </label>
        <select value={this.props.selected} onChange={this.props.onChange} name="sortBy" className="sortBy">
          <option>relevance</option>
          <option>newest</option>
          <option>most helpful</option>
        </select>
      </form>
    );
  }
}

export default SortBy;