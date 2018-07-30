import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

import SearchBar from './SearchBar.jsx';
import Reviews from './Reviews.jsx';
// import Ratings from './Ratings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios
      .get('/rooms/99')
      .then((res) => {
        console.log(res.data);
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.reviews.length}
          {' '}
Reviews
        </h2>
        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => (
            <span>
★
            </span>
          )}
          starCount={5}
          value={5}
        />
        <span>
          <SearchBar />
        </span>
        <Reviews review={this.state.reviews} />
      </div>
    );
  }
}
export default App;
