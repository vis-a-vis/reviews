import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Ratings = (props) => {
  console.log(props.reviews);
  const container = {
    display: 'flex',
    // flexdirection: 'column',
  };
  const rating = {
    display: 'flex',
    flexdirection: 'column',
    flexwrap: 'wrap',
  };
  return (
    <div className="container" style={container}>
      <div className="overall" />
      <div>
        <h5 className="accuracy" style={rating}>
          {' '}
          Accuracy
          {' '}
        </h5>
      </div>
      <div>
        <h5 className="communication" style={rating}>
          {' '}
          Communication
          {' '}
        </h5>
      </div>
      <div>
        <h5 className="cleanliness" style={rating}>
          {' '}
          Cleanliness
          {' '}
        </h5>
      </div>
      <div>
        <h5 className="location" style={rating}>
          {' '}
          Location
          {' '}
        </h5>
      </div>
      <div>
        <h5 className="checkin" style={rating}>
          {' '}
          Check-in
          {' '}
        </h5>
      </div>
      <div>
        <h5 className="value" style={rating}>
          {' '}
          Value
          {' '}
        </h5>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Ratings;
