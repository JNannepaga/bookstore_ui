import serviceDiscoveryConfig from './serviceDiscoveryConfig.json';

export const BASE_URL = window._env_?.REACT_APP_BOOKSTORE_API_BASE_URL || '';
export const GET_BOOKS_URI = serviceDiscoveryConfig.bookstoreApi.getBooks;
export const ADD_BOOK_URI = serviceDiscoveryConfig.bookstoreApi.addBook;
