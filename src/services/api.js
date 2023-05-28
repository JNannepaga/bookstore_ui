import axios from 'axios';
import { ADD_BOOK_URI, BASE_URL, GET_BOOKS_URI } from './serviceDiscovery';

const api_service = {
  get: (uri) => {
    return axios(
      {
      method: 'GET',
      url: BASE_URL + uri,
    });
  },
  post: (uri, data) => {
    return axios({
      method: 'POST',
      url: BASE_URL + uri,
      data,
    });
  },
};

export const books_api_service = () => ({
  getBooks: () =>
    api_service
      .get(GET_BOOKS_URI)
      .then((resp) => {
        const data = resp.data;
        return data;
      })
      .catch((err) => {
        const errorMessage = err.message;
        throw errorMessage;
      }),

  addBook: (data) =>
    api_service
      .post(ADD_BOOK_URI, data)
      .then((resp) => {
        const data = resp.data;
        return data;
      })
      .catch((err) => {
        const errorMessage = err.message;
        throw errorMessage;
      }),
});
