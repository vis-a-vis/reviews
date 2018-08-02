import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

import SearchBar from './SearchBar.jsx';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Stars from './Stars.jsx';
import Pages from './Pages.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filtered: [],
      pages: [],
      isSearched: false,
    };
    this.search = this.search.bind(this);
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
    console.log(reviews);
    const filteredReviews = reviews.filter(review => review.review.includes(term));
    console.log(filteredReviews);
    isSearched = true;
    // term.length > 0 ? this.setState({ reviews: filteredReviews }) : this.setState({reviews:})
  }

  render() {
    const topContainer = {
      width: 650,
      borderbottom: '1px solid #ccc',
      margin: 25,
    };

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
          <Pages reviews={this.state.reviews} />
          {/* {this.state.reviews.map(review => <Reviews key={review.id} review={review} />)} */}
        </div>
        <div>
          {/* <Pages reviews={this.state.reviews} /> */}
        </div>
      </div>
    );
  }
}
export default App;
