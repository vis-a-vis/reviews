import React from 'react';
// import { access } from 'fs';
import Stars from './Stars.jsx';

const Ratings = (props) => {
  const { reviews } = props;
  // const accuracyRating = () => props.accuracy.reduce((total, review) => total + review.accuracy, 0) / reviews.length;
  // console.log('acc', accuracyRating());
  // const communicationRating = () => props.communication.reduce((total, review) => total + review.communication, 0) / reviews.length;
  // const cleanlinessRating = () => props.cleanliness.reduce((total, review) => total + review.cleanliness, 0) / reviews.length;
  // const locationRating = () => props.location.reduce((total, review) => total + review.location, 0) / reviews.length;
  // const checkinRating = () => props.checkin.reduce((total, review) => total + review.checkin, 0) / reviews.length;
  // const valueRating = () => props.value.reduce((total, review) => total + review.value, 0) / props.reviews.length;

  const container = {
    // display: 'inline-block',
  };
  return (
    <div className="container" style={container}>
      <table style={container}>
        <tbody>
          <tr className="leftRating">
            <td className="accuracy">
              {' '}
              Accuracy
              {' '}
              <span>
                <Stars rating={5} />
              </span>
            </td>

            <td className="communication">
              {' '}
              Communication
              {' '}
              <span>
                <Stars rating={5} />
              </span>
            </td>
            <td className="cleanliness">
              {' '}
              Cleanliness
              {' '}
              <span>
                <Stars rating={5} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr className="leftRating">
            <td className="location">
              {' '}
              Location
              {' '}
              <span>
                <Stars rating={5} />
              </span>
            </td>

            <td className="checkin">
              {' '}
              Check-in
              {' '}
              <span>
                <Stars rating={5} />
              </span>
            </td>
            <td className="values">
              {' '}
              Value
              {' '}
              <span>
                <Stars rating={5} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ratings;
