import React from 'react';
import { Form, Input, Button, InputNumber, Card, Space } from 'antd';

export const AddBook = ({ onSaveBook }) => {
  const [form] = Form.useForm();

  async function onFinish(data) {
    await onSaveBook(data);
    form.resetFields();
  }

  return (
    <Space direction="vertical">
      <Card title="Add a Book">
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Book Name"
            name="name"
            rules={[
              { required: true, message: 'Please enter name of the book.!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Book Cost"
            name="price"
            rules={[
              { required: true, message: 'Please enter cost of the book!' },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            label="Book Genere"
            name="genere"
            rules={[
              { required: true, message: 'Please enter Genere of the book!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};
