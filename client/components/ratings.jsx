import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Ratings = props => (
  <div>
    <h3>
      Ratings:
      {/* {rating} */}
    </h3>
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
  </div>
);

export default Ratings;
