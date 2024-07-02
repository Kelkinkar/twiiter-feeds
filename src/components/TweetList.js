import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TweetList = ({ username }) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(`/api/tweets`, { params: { username } });
        setTweets(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching tweets');
        setLoading(false);
      }
    };

    fetchTweets();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <p>{tweet.full_text}</p>
          <p><small>{new Date(tweet.created_at).toLocaleString()}</small></p>
        </li>
      ))}
    </ul>
  );
};

export default TweetList;
