import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Space, Row, Col, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

interface GodownForm {
  key: number;
}

const GodownDetailsForm = () => {
  const [form] = Form.useForm();
  const [godownForms, setGodownForms] = useState<GodownForm[]>([{ key: 1 }]);

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  const addGodownForm = () => {
    const newFormKey = godownForms.length + 1;
    setGodownForms([...godownForms, { key: newFormKey }]);
  };

  const removeGodownForm = (formKey: number) => {
    const updatedForms = godownForms.filter((form) => form.key !== formKey);
    setGodownForms(updatedForms);
  };

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailFormItemLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <Form form={form} onFinish={onFinish} autoComplete="off">
      {godownForms.map((godownForm) => (
        <div key={godownForm.key} style={{ marginBottom: '24px' }}>
          <Title level={4}>Godown Details {godownForm.key}</Title>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                {...formItemLayout}
                label="Address"
                name={`address_${godownForm.key}`}
                rules={[{ required: true, message: 'Please enter the address' }]}
              >
                <Input placeholder="Enter address" />
              </Form.Item>

              <Form.Item
                {...formItemLayout}
                label="Storage Capacity"
                name={`storageCapacity_${godownForm.key}`}
                rules={[{ required: true, message: 'Please enter the storage capacity' }]}
              >
                <Input placeholder="Enter storage capacity" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                {...formItemLayout}
                label="Godown Type"
                name={`godownType_${godownForm.key}`}
                rules={[{ required: true, message: 'Please select the godown type' }]}
              >
                <Select placeholder="Select godown type">
                  <Option value="type1">Type 1</Option>
                  <Option value="type2">Type 2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item {...tailFormItemLayout}>
            <Checkbox name={`isPrimaryGodown_${godownForm.key}`}>Is Primary Godown</Checkbox>
            {godownForm.key !== 1 && (
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                size="small"
                onClick={() => removeGodownForm(godownForm.key)}
                style={{ marginLeft: '8px' }}
              />
            )}
          </Form.Item>
        </div>
      ))}

      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="default" shape="circle" icon={<PlusOutlined />} onClick={addGodownForm} />
        </Space>
      </Form.Item>
    </Form>
  );
};

export default GodownDetailsForm;
