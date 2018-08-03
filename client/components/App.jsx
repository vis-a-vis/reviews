import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar.jsx';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Stars from './Stars.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filtered: [],
      pages: [],
      currentPage: 1,
      reviewsPerPage: 10,
      isSearched: false,
    };
    this.search = this.search.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios
      .get('/rooms/98')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  search(term) {
    const { reviews } = this.state;
    // let { isSearched } = this.state;
    const filteredReviews = reviews.filter(review => review.review.includes(term));
    console.log(filteredReviews);
    // isSearched = true;
    this.setState({ reviews: filteredReviews });
  }

  handlePageClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const topContainer = {
      width: 650,
      borderbottom: '1px solid #ccc',
      margin: 25,
    };
    const container = {
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'center',
    };
    const numberOfReviews = {
      fontSize: 30,
      fontWeight: 'bold',
    };

    const pageContainer = {
      margin: 30,
    };
    const pageNumber = {
      width: 48,
      height: 48,
      display: 'inline-block',
      borderRadius: '50%',
      margin: 'auto',
    };

    const searchBar = {
      display: 'inline-block',
      marginLeft: 50,
    };

    const { reviews, currentPage, reviewsPerPage } = this.state;

    const indexOfLastReviews = currentPage * reviewsPerPage;
    const indexOfFirstReviews = indexOfLastReviews - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReviews, indexOfLastReviews);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    return (
      <div className="topContainer" style={topContainer}>
        <div style={container}>
          <div style={numberOfReviews}>
            {this.state.reviews.length}
            {' '}
Reviews
          </div>
          <div style={searchBar}>
            <SearchBar search={this.search} />
          </div>
        </div>
        <div>
          <Ratings review={this.state.reviews} />
        </div>
        <div>
          {currentReviews.map(review => <Reviews key={review.id} review={review} />)}
          <div style={pageContainer}>
            {pageNumbers.map(number => (
              <div key={number} id={number} onClick={this.handlePageClick} style={pageNumber}>
                {number}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
