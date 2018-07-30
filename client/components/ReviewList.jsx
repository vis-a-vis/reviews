import React from 'react';

const ReviewList = props => (
  <div>
    <h4>
Number of Reviews
    </h4>
    There are
    {props.reviews.length}
    reviews.
  </div>
);

export default ReviewList;
