import React, { useState } from 'react';
// import TweetList from '../components/TweetList';
import ImageGallery  from '../components/ImageGallery';
const Home = () => {
  const [username, setUsername] = useState('Kelkinkar');

  return (
    <div>
      <h1>Image Gallery</h1>
      {/* <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Twitter username"
      />
      <TweetList username={username} /> */}
      <ImageGallery />

    </div>
  );
};

export default Home;
