import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
    // this.onStarClick = this.onStarClick.bind(this);
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

  // search(term) {
  //   console.log(`${term} was searched`);
  // }

  render() {
    return (
      <div>
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

export default Reviews;
