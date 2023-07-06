import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const PropertyDetailsForm: React.FC = () => {
  const [formCount, setFormCount] = useState(1);

  const handleAddForm = () => {
    setFormCount((prevCount) => prevCount + 1);
  };

  const handleDeleteForm = () => {
    setFormCount((prevCount) => prevCount - 1);
  };

  const onFinish = (values: any) => {
    console.log('Property Details:', values);
  };

  return (
    <Form onFinish={onFinish}>
      {Array.from({ length: formCount }, (_, index) => (
        <React.Fragment key={index}>
          <Form.Item
            label="Address"
            name={`address_${index}`}
            rules={[{ required: true, message: 'Please enter the address' }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>

          <Form.Item
            label="Estimated Value"
            name={`estimatedValue_${index}`}
            rules={[{ required: true, message: 'Please enter the estimated value' }]}
          >
            <Input placeholder="Enter estimated value" type="number" />
          </Form.Item>

          <Form.Item
            label="Hypothecation Details"
            name={`hypothecationDetails_${index}`}
            rules={[{ required: true, message: 'Please enter the hypothecation details' }]}
          >
            <Input.TextArea placeholder="Enter hypothecation details" rows={4} />
          </Form.Item>

          {formCount > 1 && (
            <Button
              type="danger"
              icon={<DeleteOutlined />}
              onClick={handleDeleteForm}
              style={{ marginBottom: '1rem' }}
            >
              Delete
            </Button>
          )}

          <hr />
        </React.Fragment>
      ))}

      <Space>
        <Button type="dashed" icon={<PlusOutlined />} onClick={handleAddForm}>
          Add Form
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </Form>
  );
};

export default PropertyDetailsForm;
