import React, { useState, useEffect } from 'react';
import { Button, message, Input, Form, Row, Col, Checkbox, Select } from 'antd';

const { Option } = Select;

const RegisterAddress: React.FC = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields(); 
  }, [form]);

  const onFinish = (values: any) => {
    message.success('Processing complete!');
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="address1"
              label="Address Line 1"
              rules={[{ required: true, message: 'Please enter Address Line 1' }]}
            >
              <Input placeholder="Address Line 1" />

            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="address2" label="Address Line 2">
              <Input placeholder="Address Line 2" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="address3" label="Address Line 3">
              <Input placeholder="Address Line 3" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="postalCode"
              label="Postal Code"
              rules={[{ required: true, message: 'Please enter Postal Code' }]}
            >
              <Input placeholder="Postal Code" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: 'Please select Country' }]}
            >
              <Select placeholder="Select Country">
                <Option value="country1">Country 1</Option>
                <Option value="country2">Country 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: 'Please enter State' }]}
            >
              <Input placeholder="State" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="district" label="District">
              <Input placeholder="District" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: 'Please enter City' }]}
            >
              <Input placeholder="City" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="isPrimary" valuePropName="checked">
              <Checkbox>Is Primary Address</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default RegisterAddress;