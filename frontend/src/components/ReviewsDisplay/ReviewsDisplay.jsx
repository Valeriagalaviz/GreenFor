import React from 'react';
import './ReviewsDisplay.css'
import Review from '../Reviews/Reviews';
import { reviews_list } from '../../assets/assets';

const ReviewDisplay = () => {
  return (
    <div className='review-display' id='review-display'>
      <h2>Customer Reviews</h2>
      <div className="review-list">
        {reviews_list.map((review,index) => (
           <Review key={index} id={review._id} userName={review.userName} reviewText={review.reviewText} userImage={review.userImage}/>
        ))}
      </div>
    </div>
  );
};

export default ReviewDisplay;
