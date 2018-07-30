import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.reviews.map((review, index) => (
            <li key={index}>
              <img src={review.img} />
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
