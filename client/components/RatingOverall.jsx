import React from 'react';
import Stars from './Stars.jsx';

const RatingOverall = (props) => {
  const average = () => props.review.reduce((acc, cur) => acc + cur.average, 0) / props.review.length;

  const stars = {
    fontSize: 30,
  };
  return (
    <div className="container">
      <div>
        <div>
          <span style={stars}>
            <Stars rating={average()} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RatingOverall;
