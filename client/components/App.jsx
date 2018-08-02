import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

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
      .get('/rooms/1')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  search(term) {
    const { reviews } = this.state;
    let { isSearched } = this.state;

    // const filteredReviews = reviews.filter(review => review.review.includes(term));

    isSearched = true;
    // term.length > 0 ? this.setState({ reviews: filteredReviews }) : this.setState({reviews:})
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

    const { reviews, currentPage, reviewsPerPage } = this.state;
    // Logic for displaying current todos
    const indexOfLastReviews = currentPage * reviewsPerPage;
    const indexOfFirstReviews = indexOfLastReviews - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReviews, indexOfLastReviews);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    return (
      <div className="topContainer" style={topContainer}>
        <div>
          {this.state.reviews.length}
          {' '}
Reviews
          <SearchBar search={this.search} />
        </div>
        <div>
          <Ratings review={this.state.reviews} />
        </div>
        <div>
          {currentReviews.map(review => <Reviews key={review.id} review={review} />)}
          {pageNumbers.map(number => (
            <div key={number} id={number} onClick={this.handlePageClick}>
              {number}
            </div>
          ))}
        </div>
        <div>
          {/* <Pages reviews={this.state.reviews} /> */}
        </div>
      </div>
    );
  }
}
export default App;
