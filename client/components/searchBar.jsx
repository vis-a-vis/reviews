import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <view>
          <input value={query} onChange={this.handleQueryChange} placeholder="Search reviews" />
        </view>
      </div>
    );
  }
}

export default SearchBar;
