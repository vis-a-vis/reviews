import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // showMore: false,
      // reviews: [],
    };
    this.readMore = this.readMore.bind(this);
  }

  readMore() {
    console.log('clicked');
    console.log(this.props.review.review);
    this.setState({ reviews: this.props.review.review });
    // this.setState({ showMore: true });
  }

  render() {
    const img = {
      width: 48,
      height: 48,
      display: 'block',
      borderRadius: '50%',
      float: 'left',
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
      display: 'block',
      marginTop: 15,
    };
    const name = {
      display: 'inline-block',
      fontSize: 18,
      marginLeft: 18,
      fontWeight: 'bold',
    };
    const date = {
      display: 'inline-block',
      marginTop: 2.5,
      marginLeft: 18,
    };
    const readMore = {
      color: '#008489',
    };

    return (
      <div className="container">
        <div>
          <div className="profile">
            <img src={this.props.review.img} alt="person" style={img} />

            <span style={name}>
              {this.props.review.userName}
            </span>
          </div>
          <span style={date}>
            {this.props.review.date.slice(4, 16)}
          </span>
          <span style={review}>
            {this.props.review.review.length > 180 && (
              <div>
                {this.props.review.review.slice(0, 180)}
                <span onClick={this.readMore} style={readMore}>
                  ...Read more
                </span>
              </div>
            )}
            {this.props.review.review.length < 180 && (
            <div>
              {this.props.review.review}
            </div>
            )}
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
