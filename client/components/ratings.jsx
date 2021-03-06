import React from 'react';
import Stars from './Stars.jsx';

const Ratings = (props) => {
  const accuracy = () => props.review.reduce((acc, cur) => acc + cur.accuracy, 0) / props.review.length;
  const communication = () => props.review.reduce((acc, cur) => acc + cur.communication, 0) / props.review.length;
  const cleanliness = () => props.review.reduce((acc, cur) => acc + cur.cleanliness, 0) / props.review.length;
  const location = () => props.review.reduce((acc, cur) => acc + cur.location, 0) / props.review.length;
  const checkin = () => props.review.reduce((acc, cur) => acc + cur.checkin, 0) / props.review.length;
  const value = () => props.review.reduce((acc, cur) => acc + cur.value, 0) / props.review.length;

  const topContainer = {
    width: 600,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column',
  };
  const secondContainer = {
    width: '100%',
    flexBasis: 'auto',
  };
  const ratingContainer = {
    display: 'flex',
    flexDirection: 'column',
  };
  const rating = {
    fontSize: 20,
    margin: 20,
  };
  const body = {
    display: 'flex',
    marginTop: 5,
  };

  const line = {
    width: 640,
    display: 'block',
    marginTop: 0,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderStyle: 'inset',
    borderWidth: 1,
  };

  return (
    <div className="container" style={topContainer}>
      <div style={secondContainer}>
        <table style={ratingContainer}>
          <tbody style={body}>
            <tr>
              <td style={line} />
              <td className="accuracy" style={rating}>
                {' '}
                Accuracy
                {' '}
                <span>
                  <Stars rating={accuracy()} style={rating} />
                </span>
              </td>

              <td className="communication" style={rating}>
                {' '}
                Communication
                {' '}
                <span>
                  <Stars rating={communication()} style={rating} />
                </span>
              </td>
              <td className="cleanliness" style={rating}>
                {' '}
                Cleanliness
                {' '}
                <span>
                  <Stars rating={cleanliness()} style={rating} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={ratingContainer}>
          <tbody>
            <tr>
              <td className="location" style={rating}>
                {' '}
                Location
                {' '}
                <span>
                  <Stars rating={location()} style={rating} />
                </span>
              </td>

              <td className="checkin" style={rating}>
                {' '}
                Check-in
                {' '}
                <span>
                  <Stars rating={checkin()} style={rating} />
                </span>
              </td>
              <td className="value" style={rating}>
                {' '}
                Value
                {' '}
                <span>
                  <Stars rating={value()} style={rating} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ratings;
