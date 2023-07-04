"use client"
import React, { useState } from 'react';
import { Form, InputNumber, Input, Select, Checkbox, Button } from 'antd';

const { Option } = Select;



const App: React.FC = () => {
  

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
    >
  
      <Form.Item
        label="Name Of The Firm"
        name="firmName"
        rules={[{ required: true, message: 'Please enter the name of the firm' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name Of The Proprietor/Partners"
        name="proprietorPartners"
        rules={[{ required: true, message: 'Please enter the name of the proprietor/partners' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Organization Type"
        name="organizationType"
        rules={[{ required: true, message: 'Please select the organization type' }]}
      >
        <Select placeholder="Select organization type">
          <Option value="type1">Type 1</Option>
          <Option value="type2">Type 2</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Dealer Website" name="dealerWebsite">
        <Input />
      </Form.Item>

      <Form.Item
        label="Established Year"
        name="establishedYear"
        rules={[{ required: true, message: 'Please enter the established year' }]}
      >
        <InputNumber min={1900} max={2023} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Dealer Category"
        name="dealerCategory"
        rules={[{ required: true, message: 'Please select the dealer category' }]}
      >
        <Select placeholder="Select dealer category">
          <Option value="category1">Category 1</Option>
          <Option value="category2">Category 2</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Dealer Type"
        name="dealerType"
        rules={[{ required: true, message: 'Please select the dealer type' }]}
      >
        <Checkbox.Group options={[
          {
            label: 'Existing Dealer (no. of years registered with us)',
            value: 'existingDealer',
          },
          { label: 'First Time Dealer', value: 'firstTimeDealer' },
        ]} />
      </Form.Item>

      <Form.Item label="Dealership Required At" colon={false}>
        <Form.Item
          name={['dealershipLocation', 'village']}
          rules={[{ required: true, message: 'Please enter the village/taluka' }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="Village/Taluka" />
        </Form.Item>
        <Form.Item
          name={['dealershipLocation', 'district']}
          rules={[{ required: true, message: 'Please enter the district' }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="District" />
        </Form.Item>
        <Form.Item
          name={['dealershipLocation', 'state']}
          rules={[{ required: true, message: 'Please enter the state' }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="State" />
        </Form.Item>
      </Form.Item>

    </Form>
  );
};

export default App;
