import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // review: '',
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
    const reviewContainer = {};

    const review = {
      margin: 16,
      font: 'Helvetica Neue',
    };
    const profile = {
      display: 'flex',
      flexdirection: 'column',
    };

    return (
      <div className="container" style={reviewContainer}>
        <div style={profile}>
          <div className="profile">
            <img src={this.props.review.img} alt="person" style={img} />

            <span>
              {this.props.review.userName}
            </span>

            <span>
              {this.props.review.date}
            </span>
          </div>
          <span style={review}>
            {/* {this.props.review.review.length < 280 ? */}
            {this.props.review.review}
          </span>
        </div>
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

// const profile = {
//   display: 'inline-block',
// };
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
