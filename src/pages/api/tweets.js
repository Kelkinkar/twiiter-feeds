import { NextApiRequest, NextApiResponse } from 'next';
import Twitter from 'twitter';

const client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export default async (req = NextApiRequest, res = NextApiResponse) => {
  const { username, count } = req.query;

  try {
    const params = { screen_name: username, count: count || 10, tweet_mode: 'extended' };
    const tweets = await client.get('statuses/user_timeline', params);
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch tweets' });
  }
};
