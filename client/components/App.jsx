import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar.jsx';
import Reviews from './Reviews.jsx';
import RatingOverall from './RatingOverall.jsx';
import Ratings from './Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filteredResults: [],
      currentPage: 1,
      reviewsPerPage: 10,
    };
    this.search = this.search.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios
      .get('/rooms/1')
      .then((res) => {
        this.setState({ reviews: res.data });
        this.setState({ filteredResults: res.data });
      })
      .catch(err => console.error('error fetching reviews', err));
  }

  search(term) {
    const { reviews, filteredResults } = this.state;

    const filteredReviews = reviews.filter(review => review.review.includes(term));

    term.length > 0 ? this.setState({ filteredResults: filteredReviews }) : this.resetSearch();
  }

  resetSearch() {
    const { reviews } = this.state;
    this.setState({ filteredResults: reviews });
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
      margin: 50,
    };
    const secondContainer = {
      width: '78%',
      marginLeft: 26,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    };

    const numberOfReviews = {
      fontSize: 30,
      fontWeight: 'bold',
    };
    const ratingOverall = {
      marginRight: 140,
    };

    const pageContainer = {
      width: 640,
      margin: 30,
      display: 'flex',
      justifyContent: 'space-between',
    };
    const pageNumber = {
      width: 48,
      height: 48,
      display: 'inline-block',
      borderRadius: '50%',
      margin: 'auto',
      marginLeft: 28,
    };

    const searchBar = {
      marginLeft: 40,
    };

    const {
      reviews, currentPage, reviewsPerPage, filteredResults,
    } = this.state;

    const indexOfLastReviews = currentPage * reviewsPerPage;
    const indexOfFirstReviews = indexOfLastReviews - reviewsPerPage;
    const currentReviews = filteredResults.slice(indexOfFirstReviews, indexOfLastReviews);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredResults.length / reviewsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    return (
      <div className="topContainer" style={topContainer}>
        <div style={secondContainer}>
          <div style={numberOfReviews}>
            {this.state.reviews.length}
            {' '}
Reviews
          </div>
          <div style={ratingOverall}>
            <RatingOverall review={this.state.reviews} />
          </div>
          <div style={searchBar}>
            <SearchBar className="searchBar" search={this.search} reset={this.resetSearch} />
          </div>
        </div>
        <div style={pageContainer}>
          <div>
            <Ratings className="ratings" review={this.state.reviews} />
            {currentReviews.map(review => (
              <Reviews key={review.id} review={review} />
            ))}
          </div>
        </div>
        <div>
          <div>
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
