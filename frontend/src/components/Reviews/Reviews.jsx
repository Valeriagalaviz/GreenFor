import './Reviews.css';
import { assets } from '../../assets/assets';

const Review = ({ userImage, userName, reviewText }) => {
  return (
    <div className='review'>
      <div className="review-user-info">
        <img className='review-user-image' src={userImage} alt='' />
        <p className="review-user-name">{userName}</p>
      </div>
      <div className="review-content">
        <img className='review-rating-stars' src={assets.rating_stars} alt='' />
        <p className="review-text">{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;

