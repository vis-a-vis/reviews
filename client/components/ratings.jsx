import React from 'react';
// import Ratings from 'react-ratings-declarative';


<StarRatingComponent
    name={String} /* name of the radio input, it is required */
    value={Number} /* number of selected icon (`0` - none, `1` - first) */
    starCount={Number} /* number of icons in rating, default `5` */
    onStarClick={Function(nextValue, prevValue, name)} /* on icon click handler */
    onStarHover={Function(nextValue, prevValue, name)} /* on icon hover handler */
    onStarHoverOut={Function(nextValue, prevValue, name)} /* on icon hover out handler */
    renderStarIcon={Function(nextValue, prevValue, name)} /* it should return string or react component */
    renderStarIconHalf={Function(nextValue, prevValue, name)} /* it should return string or react component */
    starColor={String} /* color of selected icons, default `#ffb400` */
    emptyStarColor={String} /* color of non-selected icons, default `#333` */
    editing={Boolean} /* is component available for editing, default `true` */
/>
// const Ratings = () => (
//   <Ratings
//     rating={4.5}
//     widgetDimensions="40px"
//     widgetSpacings="15px"
//   >
//     <Ratings.Widget widgetRatedColor="green" />
//     <Ratings.Widget widgetSpacing="30px" widgetDimension="15px" />
//     <Ratings.Widget widgetRatedColor="black" />
//     <Ratings.Widget widgetRatedColor="rebeccapurple" />
//     <Ratings.Widget />
//   </Ratings>
// );


// export default Ratings;
