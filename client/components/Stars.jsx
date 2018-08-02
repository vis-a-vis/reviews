import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Stars = ({ rating }) => (
  <div>
    <StarRatingComponent
      name="ratings"
      value={rating}
      starCount={5}
      starColor="#008489"
      emptyStarColor="#D8D8D8"
    />
  </div>
);

export default Stars;
