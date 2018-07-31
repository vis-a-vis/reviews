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
      filtered: [],
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

  search(term) {
    console.log(term);
  }

  render() {
    const img = {
      width: 48,
      height: 48,
      display: 'block',
      borderRadius: '50%',
    };
    return (
      <div className="container">
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
          <SearchBar search={this.search} />
        </span>
        {/* <Reviews reviews={this.state.reviews} /> */}

        <ul>
          {this.state.reviews.map((review, index) => (
            <li key={index}>
              <img src={review.img} alt="true" style={img} />
              {review.date}
              {review.review}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
