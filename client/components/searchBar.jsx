import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  search() {
    this.on;
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div>
        <view>
          <SearchBar onChange={this.handleChange} />
        </view>
      </div>
    );
  }
}

export default SearchBar;
