import { useEffect, useState } from 'react';
import repository from '../repository/repository';


//custom hook to manage data send/return from the api to the view component


export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await repository.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'stockholm',
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrMessage('Something went wrong');
    }
  };

  const getDetails = async (id) => {
    try {
      const response = await repository.get(`/${id}`);
      setDetails(response.data);
    } catch (err) {
      setErrMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('restauranger');
  }, []);

  return [searchApi, restaurants, errMessage];
};
