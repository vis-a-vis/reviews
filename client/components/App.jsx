import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

import SearchBar from './SearchBar.jsx';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filtered: [],
      isSearched: false,
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios
      .get('/rooms/1')
      .then((res) => {
        console.log(res.data);
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }

  search(term) {
    const { reviews } = this.state;
    let { isSearched } = this.state;
    console.log(reviews);
    const filteredReviews = reviews.filter(review => review.review.includes(term));
    console.log(filteredReviews);
    isSearched = true;
    // term ? this.setState({ filtered: filteredReviews }) :
  }

  render() {
    const topContainer = {
      width: 650,
      borderbottom: '1px solid #ccc',
      margin: 25,
    };

    return (
      <div className="topContainer" style={topContainer}>
        <div>
          {this.state.reviews.length}
          {' '}
Reviews
          <SearchBar search={this.search} />
        </div>
        <div>
          <Ratings />
        </div>
        <div>
          {this.state.reviews.map(review => (
            <Reviews
              key={review.id}
              img={review.img}
              name={review.userName}
              date={review.date}
              review={review.review}
              average={review.average}
              accuracy={review.accuracy}
              communication={review.communication}
              cleanliness={review.cleanliness}
              location={review.location}
              checkin={review.checkin}
              value={review.value}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;

// {
/* <ul>
          {this.state.reviews.map(review => (
            <li key={review.id}>
              <img src={review.img} alt="true" style={img} />
              {review.date}
              if (review.review.length > 280)
              {' '}
              {}
              {review.review}
            </li>
          ))}
        </ul> */
// }
