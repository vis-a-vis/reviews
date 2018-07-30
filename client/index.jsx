import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/SearchBar.jsx';
import Reviews from './components/Reviews.jsx';
import ReviewList from './components/ReviewList.jsx';
import Ratings from './components/Ratings.jsx';

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
      .get('/rooms/1')
      .then((res) => {
        console.log(res.data);
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  render() {
    return (
      <div>
        <h1>
Reviews:
        </h1>
        <ReviewList />
        <Ratings />
        <SearchBar />
        <ul>
          {this.state.reviews.map((review, index) => (
            <li key={index}>
              {review.userName}
              {review.img}
              {review.date}
              {review.review}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
