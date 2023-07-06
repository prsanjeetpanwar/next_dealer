import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Space, Row, Col, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const BankDetailsForm = () => {
  const [form] = Form.useForm();
  const [bankForms, setBankForms] = useState([{ key: 1 }]);

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const addBankForm = () => {
    const newFormKey = bankForms.length + 1;
    setBankForms([...bankForms, { key: newFormKey }]);
  };

  const removeBankForm = (formKey) => {
    const updatedForms = bankForms.filter((form) => form.key !== formKey);
    setBankForms(updatedForms);
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
      {bankForms.map((bankForm) => (
        <Row key={bankForm.key}>
          <Col span={24}>
            <Title level={4}>Bank Details</Title>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Form.Item
                  {...formItemLayout}
                  label="Bank Name"
                  name={`bankName_${bankForm.key}`}
                  rules={[{ required: true, message: 'Please enter the bank name' }]}
                >
                  <Input placeholder="Enter bank name" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  {...formItemLayout}
                  label="IFSC Code"
                  name={`ifscCode_${bankForm.key}`}
                  rules={[{ required: true, message: 'Please enter the IFSC code' }]}
                >
                  <Input placeholder="Enter IFSC code" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  {...formItemLayout}
                  label="Account Number"
                  name={`accountNumber_${bankForm.key}`}
                  rules={[{ required: true, message: 'Please enter the account number' }]}
                >
                  <Input placeholder="Enter account number" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Form.Item
                  {...formItemLayout}
                  label="Type of Account"
                  name={`accountType_${bankForm.key}`}
                  rules={[{ required: true, message: 'Please select the type of account' }]}
                >
                  <Select placeholder="Select account type">
                    <Option value="current">Current Account</Option>
                    <Option value="savings">Savings Account</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  {...formItemLayout}
                  label="City"
                  name={`city_${bankForm.key}`}
                  rules={[{ required: true, message: 'Please enter the city' }]}
                >
                  <Input placeholder="Enter city" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  {...formItemLayout}
                  label="Branch Name"
                  name={`branchName_${bankForm.key}`}
                  rules={[{ required: true, message: 'Please enter the branch name' }]}
                >
                  <Input placeholder="Enter branch name" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Form.Item
              {...tailFormItemLayout}
              name={`isPrimaryBank_${bankForm.key}`}
              valuePropName="checked"
            >
              <Checkbox>Is Primary Bank</Checkbox>
            </Form.Item>
          </Col>
          <Col span={24}>
            {bankForm.key !== 1 && (
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                size="small"
                onClick={() => removeBankForm(bankForm.key)}
              />
            )}
          </Col>
        </Row>
      ))}

      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="default" shape="circle" icon={<PlusOutlined />} onClick={addBankForm} />
        </Space>
      </Form.Item>
    </Form>
  );
};

export default BankDetailsForm;
