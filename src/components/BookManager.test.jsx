import React from 'react';
import { shallow } from 'enzyme';
import { AddBook } from '../components/AddBook';
import { BookList } from '../components/BookList';
import { BookManager } from './BookManager';

jest.mock('../services/api', () => ({
  books_api_service: {
    getBooks: jest.fn().mockResolvedValue([]),
    addBook: jest.fn().mockResolvedValue(),
  },
}));

describe('component', () => {
  describe('BookManager', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders AddBook and BookList components', () => {
      const wrapper = shallow(<BookManager />);

      expect(wrapper.find(AddBook)).toHaveLength(1);
      expect(wrapper.find(BookList)).toHaveLength(1);
    });
  });
});
