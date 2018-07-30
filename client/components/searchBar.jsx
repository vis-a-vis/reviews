import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleQueryChange(e) {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.props.search(this.state.query);
    }
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <view>
          <input
            value={query}
            onChange={this.handleQueryChange}
            onKeyDown={this.handleKeyPress}
            placeholder="Search reviews"
          />
        </view>
      </div>
    );
  }
}

export default SearchBar;
