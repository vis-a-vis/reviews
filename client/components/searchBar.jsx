import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearInput = this.clearInput.bind(this);
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

  clearInput() {
    this.setState({ query: '' });
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <input
          value={query}
          onChange={this.handleQueryChange}
          onKeyDown={this.handleKeyPress}
          placeholder="Search reviews"
        />
        {query.length > 0 && <button onClick={this.clearInput} type="submit" />}
      </div>
    );
  }
}

export default SearchBar;
