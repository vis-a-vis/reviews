import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // showMore: false,
    };
  }

  // initialState() {
  //   limit: 180,
  //   showMore: true,
  // }

  showMore() {
    // console.log('clicked');
    // this.setState({ showMore: true });
  }

  render() {
    const img = {
      width: 48,
      height: 48,
      display: 'block',
      borderRadius: '50%',
    };

    const reviewSeparator = {
      marginBottom: 20,
    };

    const line = {
      display: 'block',
      marginTop: 20,
      marginBottom: 0.5,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderStyle: 'inset',
      borderWidth: 1,
    };
    const review = {
      font: 'Helvetica Neue',
    };
    // const profile = {
    //   display: 'flex',
    //   flexdirection: 'column',
    // };

    return (
      <div className="container">
        <div>
          <div className="profile">
            <img src={this.props.review.img} alt="person" style={img} />

            <span>
              {this.props.review.userName}
            </span>
          </div>
          <span>
            {this.props.review.date}
          </span>
          <span style={review}>
            {/* {this.props.review.review.length < 280 ? */}
            {this.props.review.review}
          </span>
          <div style={reviewSeparator}>
            <div style={line} />
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
