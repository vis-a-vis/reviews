import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // satisfied: 'I love this product!!',
      // unhappy: 'Arrived late and damaged :(',
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

  handleChange(e) {
    this.setState({ rating: e.target.value });
  }

  getReviews() {
    axios
      .get('http://localhost:3002/rooms/1')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  render() {
    const { rating } = this.state;

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
