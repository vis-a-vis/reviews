import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
// import SearchBar from './searchBar.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      rating: 5,
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  getReviews() {
    axios
      .get('http://localhost:3002/api/rooms/1')
      .then((res) => {
        console.log(res.data);
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  search(term) {
    console.log(`${term} was searched`);
  }

  // handleChange(e) {
  //   this.setState({ rating: e.target.value });
  // }

  render() {
    const { rating } = this.state;
    const filtered = this.state.reviews;

    return (
      <div>
        <div>
          <h2>
            Reviews:
            {/* {rating} */}
          </h2>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick}
          />
        </div>
      </div>
    );
  }
}
