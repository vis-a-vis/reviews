import React from 'react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';


export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // satisfied: 'I love this product!!',
      // unhappy: 'Arrived late and damaged :(',
      reviews: [],
      rating: 1,
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  getReviews() {
    axios.get('http://localhost:3002/rooms/1')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log('error fetching reviews', err));
  }


  render() {
    const { rating } = this.state;

    return (
      <div>
        <div>
          <h2>
            Reviews:
            {/* {rating} */}
          </h2>
          <StarRatingComponent
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick}
          />
        </div>
      </div>
    );
  }
}


     {/* <h2>
            Reviews:
            {rating}
            <StarRatingComponent
              name="rate2"
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={4}
            />
          </h2>
          <div>
            {this.state.reviews.map((item, index) => (
              <div key={index}>
                {item.message}
              </div>
            ))}
          </div> */}


        //   <Ratings
        //   rating={this.state.rating}
        //   widgetRatedColors="blue"
        //   changeRating={this.changeRating}
        // >
        //   <Ratings.Widget />
        //   <Ratings.Widget />
        //   <Ratings.Widget
        //     widgetDimension="15px"
        //     svgIconViewBox="0 0 5 5"
        //     svgIconPath="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
        //   />
        //   <Ratings.Widget widgetHoverColor="black" />
        //   <Ratings.Widget />
        // </Ratings>