import React from 'react';

// import search from '../../searchGlass.png';

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
    const container = {
      outline: 'solid 0.5px lightgrey',
      position: 'absolute',
    };
    const spanStyle = {
      position: 'absolute',
      display: 'inline-block',
      textAlign: 'center',
      margin: 'auto',
      fontSize: 26,
      color: 'lightgrey',
    };
    const bar = {
      height: 26,
      width: 150,
      fontSize: 14,
    };

    return (
      <div className="container" style={container}>
        <input
          value={query}
          onChange={this.handleQueryChange}
          onKeyDown={this.handleKeyPress}
          placeholder="Search reviews"
          style={bar}
        />
        {query.length > 0 && (
          <span onClick={this.clearInput} style={spanStyle}>
            &#10761;
          </span>
        )}
      </div>
    );
  }
}

export default SearchBar;
