import React from 'react';
import './Tweet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faRetweet,faHeart } from '@fortawesome/free-solid-svg-icons';

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="tweetContent">
        <p className='hi'>{tweet.image && <img src={tweet.image} height={25} alt="Tweet" style={{ borderRadius: '50%' }} />}
        {tweet.user}</p>
        <p>{tweet.content}</p>
      </div>
      <div className="tweetActions">
        <span className='child'> <FontAwesomeIcon icon={faComment} />{tweet.comments} Comments</span>
        <span className='child'> <FontAwesomeIcon icon={faRetweet} /> {tweet.retweets} Retweets</span>
        <span className='child'> <FontAwesomeIcon icon={faHeart} /> {tweet.likes} Likes</span>
      </div>
    </div>
  );
};

export default Tweet;
