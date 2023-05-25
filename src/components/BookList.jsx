import React from 'react';
import { Table } from 'antd';

export const BookList = ({ booksData }) => {
  const booksColumns = [
    {
      title: 'Book Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Cost',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Genere',
      dataIndex: 'genere',
      key: 'genere',
    },
  ];
  return (
    <React.Fragment>
      <h3>Books collection in our store</h3>
      <Table dataSource={booksData} columns={booksColumns} rowKey={'id'} />
    </React.Fragment>
  );
};
