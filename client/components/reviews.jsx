import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: '',
    };
  }

  showMore() {
    console.log('clicked');
  }

  render() {
    const img = {
      width: 48,
      height: 48,
      display: 'block',
      borderRadius: '50%',
    };
    const reviewContainer = {};

    const review = {
      margin: 16,
      font: 'Helvetica Neue',
    };
    //     if (this.props.review.length > 180) {
    //       const restOfText = this.props.review.slice(180);
    //       let isClicked = false;
    //       return (
    //         <div className="container">
    //           <span>
    //           {this.props.review}
    //             <span onClick={this.showMore}>
    //               {' '}
    // Show more
    //             </span>
    //           </span>
    //         </div>
    //       );
    //     }
    return (
      <div className="container" style={reviewContainer}>
        <img src={this.props.img} alt="person" style={img} />
        <span>
          {this.props.name}
        </span>

        <span>
          {this.props.date}
        </span>
        <span style={review}>
          {this.props.review}
        </span>
      </div>
    );
  }
}

export default Reviews;

// render() {
//   return (
//     <div>
//       <div>
//       <li>
//         <img src={review.img} alt="person" style={img} />
//         {this.state.review.date}
//         {this.state.review.review}
//       </li>
//     </div>
//   );
// }

{
  /* <span onClick={this.showMoreText}>
..Show more
        </span> */
}
