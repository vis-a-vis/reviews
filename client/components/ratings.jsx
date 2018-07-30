import React from 'react';
// import Ratings from 'react-ratings-declarative';

const Ratings = (props) => {
  return (
    <h2>Star Rating</h2>
    <div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  );
};

export default Ratings;
