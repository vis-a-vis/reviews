import React from 'react';
// import { access } from 'fs';
import Stars from './Stars.jsx';

const Ratings = (props) => {
  const accuracy = () => props.review.reduce((acc, cur) => acc + cur.accuracy, 0) / props.review.length;
  const communication = () => props.review.reduce((acc, cur) => acc + cur.communication, 0) / props.review.length;
  const cleanliness = () => props.review.reduce((acc, cur) => acc + cur.cleanliness, 0) / props.review.length;
  const location = () => props.review.reduce((acc, cur) => acc + cur.location, 0) / props.review.length;
  const checkin = () => props.review.reduce((acc, cur) => acc + cur.checkin, 0) / props.review.length;
  const value = () => props.review.reduce((acc, cur) => acc + cur.value, 0) / props.review.length;

  return (
    <div className="container">
      <table>
        <tbody>
          <tr className="leftRating">
            <td className="accuracy">
              {' '}
              Accuracy
              {' '}
              <span>
                <Stars rating={accuracy()} />
              </span>
            </td>

            <td className="communication">
              {' '}
              Communication
              {' '}
              <span>
                <Stars rating={communication()} />
              </span>
            </td>
            <td className="cleanliness">
              {' '}
              Cleanliness
              {' '}
              <span>
                <Stars rating={cleanliness()} />
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
                <Stars rating={location()} />
              </span>
            </td>

            <td className="checkin">
              {' '}
              Check-in
              {' '}
              <span>
                <Stars rating={checkin()} />
              </span>
            </td>
            <td className="value">
              {' '}
              Value
              {' '}
              <span>
                <Stars rating={value()} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ratings;
