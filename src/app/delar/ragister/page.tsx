"use client"
import React, { useState } from 'react';
import { Card, Form,Input, Button } from 'antd';
import { UserOutlined, BankOutlined, ShopOutlined, FileOutlined } from '@ant-design/icons';

const RightBoxForm = () => {
  const [values, setValues] = useState({
    registeredAddress: '',
    contactPersonDetails: '',
    bankDetails: '',
    godownDetails: '',
    nearestWarehouse: '',
    propertyDetails: '',
    registrationDetails: '',
    financialInformation: '',
    taxInformation: '',
    fertilizerSale: '',
    agroInputs: '',
    salesCommitment: '',
    businessOperations: '',
    currentDealership: '',
    documents: '',
  });

  const onFinish = (values) => {
    setValues(values);
  };

  const roundedRightIcon = (iconComponent, color) => (
    <span style={{ color, paddingRight: 8 }}>{iconComponent}</span>
  );

  return (
    <Card
      title="Dealer Details"
      style={{ width: 400 }}
      headStyle={{ background: '#9542ef', color: 'white' }}
    >
      <Form onFinish={onFinish}>
      <Form.Item
  label="Registered Address"
  name="registeredAddress"
  rules={[{ required: true, message: 'Please enter the registered address' }]}
>
  
</Form.Item>
        <Form.Item
          label="Contact Person Details"
          name="contactPersonDetails"
          suffix={roundedRightIcon(<UserOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Bank Details"
          name="bankDetails"
          suffix={roundedRightIcon(<BankOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Godown Details"
          name="godownDetails"
          suffix={roundedRightIcon(<ShopOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Nearest Warehouse"
          name="nearestWarehouse"
          suffix={roundedRightIcon(<ShopOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Details of Property of Proprietor/Partner/Firm"
          name="propertyDetails"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Registration Details"
          name="registrationDetails"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Financial Information"
          name="financialInformation"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Income Tax/ GST/Other"
          name="taxInformation"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Fertilizer Sale"
          name="fertilizerSale"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Agro Inputs"
          name="agroInputs"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Sales Commitment"
          name="salesCommitment"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Business Operations"
          name="businessOperations"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Current dealership details / Fertilizer/seeds/Pesticides/Others"
          name="currentDealership"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
        <Form.Item
          label="Documents at row"
          name="documents"
          suffix={roundedRightIcon(<FileOutlined />, '#9542ef')}
        ></Form.Item>
       
      </Form>
    </Card>
  );
};

export default RightBoxForm;
