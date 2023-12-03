import axios from 'axios';

//repository for the web

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
    'Bearer [yelp-api-key]',
  },
});
