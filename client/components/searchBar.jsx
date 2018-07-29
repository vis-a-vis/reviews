import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  handleQueryChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div>
        <view>
          <input value={this.state.query} onChange={this.handleChange} />
        </view>
      </div>
    );
  }
}

export default SearchBar;
