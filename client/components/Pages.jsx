import React from 'react';

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviews: '',
      currentPage: 1,
      reviewsPerPage: 10,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const img = {
      width: 48,
      height: 48,
      display: 'block',
      borderRadius: '50%',
    };
    // const { reviews } = this.props;
    const { currentPage, reviewsPerPage } = this.state;
    // const { review } = this.props;
    console.log(this.props.reviews);
    // Logic for displaying current todos
    const indexOfLastReviews = currentPage * reviewsPerPage;
    const indexOfFirstReviews = indexOfLastReviews - reviewsPerPage;
    const currentReviews = this.props.reviews.slice(indexOfFirstReviews, indexOfLastReviews);

    const renderReviews = currentReviews.map((review, index) => (
      <div key={index}>
        <img src={review.img} style={img} />
        {review.userName}
        {review.date}
        {review.review}
      </div>
    ));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.reviews.length / reviewsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
      <div key={number} id={number} onClick={this.handleClick}>
        {number}
      </div>
    ));

    return (
      <div>
        <div>
          {renderReviews}
        </div>
        <div id="page-numbers">
          {renderPageNumbers}
        </div>
      </div>
    );
  }
}

export default Pages;
