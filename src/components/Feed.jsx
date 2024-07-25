import React, { useState } from 'react';
import Tweet from './Tweet';
import './Feed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage,faFileAlt,faHeart   } from '@fortawesome/free-solid-svg-icons';

const Feed = () => {
  const [tweets, setTweets] = useState([
    {
      user: "Netflix Turkey",
      content: "There are 3 hours until sunrise, you don't have to finish the season. #YakamozS245",
      likes: 197,
      retweets: 127,
      comments: 33,
      image: "../../public/images.png"
    },
    {
      user: "Netflix Turkey",
      content: "Discover the hidden gems of cinema this weekend. #MovieNight",
      likes: 312,
      retweets: 198,
      comments: 77,
      image: "../../public/images.png"
    },
    {
      user: "Netflix Turkey",
      content: "What's your favorite series ending? Share with us! #SeriesFinale",
      likes: 521,
      retweets: 327,
      comments: 105,
      image: "../../public/images.png"
    }
  ]);

  const [tweetContent, setTweetContent] = useState('');

  const handleTweetSubmit = () => {
    if (tweetContent.trim() !== '') {
      const newTweet = {
        user: "Netflix Turkey", 
        content: tweetContent,
        likes: 1,
        retweets: 3,
        comments: 1,
        image: "../../public/images.png"
      };

      setTweets([newTweet, ...tweets]);
      setTweetContent('');
    }
  };

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <div className="tweetInput">
        <img src="../../public/images.png" className='alisami' alt="" />
        <textarea
          placeholder="What's happening?......."
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
        />
        <div className="tweetInputActions">
          <div className="icons">
          <FontAwesomeIcon icon={faImage}  className='icoons' color="#1da1f2" />
          <FontAwesomeIcon icon={faFileAlt} className='icoons' color="#1da1f2" />
          <FontAwesomeIcon icon={faHeart} className='icoons' color="#1da1f2"  />
          </div>
          <button onClick={handleTweetSubmit}>Tweet</button>
        </div>
      </div>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;
