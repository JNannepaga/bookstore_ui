import React from 'react';
import { shallow } from 'enzyme';
import { Table } from 'antd';
import { BookList } from './BookList';

describe('component', () => {
  describe('BookList', () => {
    it('renders the table correctly with the provided data', () => {
      const booksData = [
        { id: 1, name: 'Book 1', price: 10, genere: 'Fiction' },
        { id: 2, name: 'Book 2', price: 15, genere: 'Non-fiction' },
      ];
      const wrapper = shallow(<BookList booksData={booksData} />);

      // Check if the table is rendered
      expect(wrapper.find(Table)).toHaveLength(1);

      // Check if the table has the correct columns
      const columns = wrapper.find(Table).props().columns;
      expect(columns).toHaveLength(3);
      expect(columns[0].title).toBe('Book Name');
      expect(columns[1].title).toBe('Cost');
      expect(columns[2].title).toBe('Genere');

      // Check if the table has the correct data source
      const dataSource = wrapper.find(Table).props().dataSource;
      expect(dataSource).toEqual(booksData);
    });

    it('renders the table with an empty data source', () => {
      const wrapper = shallow(<BookList booksData={[]} />);

      // Check if the table is rendered
      expect(wrapper.find(Table)).toHaveLength(1);

      // Check if the table has an empty data source
      const dataSource = wrapper.find(Table).props().dataSource;
      expect(dataSource).toEqual([]);
    });
  });
});
