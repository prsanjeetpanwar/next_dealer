"use client"
import React, { useState } from 'react';
import { Card, Form,Menu, Progress } from 'antd';


const { SubMenu } = Menu;

const RightBoxForm = () => {
  const [currentMenu, setCurrentMenu] = useState('registeredAddress');
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

  const handleMenuClick = (e) => {
    setCurrentMenu(e.key);
  };

  const handleFormSubmit = (values) => {
    setValues(values);
  };
  const calculateProgress = () => {
    const totalFields = Object.keys(values).length;
    const completedFields = Object.values(values).filter((value) => value !== '').length;
    const progressPercentage = (completedFields / totalFields) * 100;
    return Math.round(progressPercentage);
  };
  return (
    <div style={{ display: 'flex', height: '50vw' }}>
      <Menu
        mode="vertical"
        theme="light"
        style={{ width: 250 }}
        selectedKeys={[currentMenu]}
        onClick={handleMenuClick}
      >
        <Menu.Item
          key="registeredAddress"
          style={{ height: 50, background: '#9542ef', color: 'white', display: 'flex', alignItems: 'center' }}
        >
          <h3 style={{ margin: 10, marginRight: 9, marginTop:30 }}>Form</h3>
          <div>
          <Progress percent={calculateProgress()} size="small" />
          </div>
          
        </Menu.Item>
        <Menu.Item key="registeredAddress">Registered Address</Menu.Item>
        <Menu.Item key="contactPersonDetails">Contact Person Details</Menu.Item>
        <Menu.Item key="bankDetails">Bank Details</Menu.Item>
        <Menu.Item key="godownDetails">Godown Details</Menu.Item>
        <Menu.Item key="nearestWarehouse">Nearest Warehouse</Menu.Item>
        <Menu.Item key="propertyDetails">
          Details of Property of Proprietor/Partner/Firm
        </Menu.Item>
        <Menu.Item key="registrationDetails">Registration Details</Menu.Item>
        <Menu.Item key="financialInformation">Financial Information</Menu.Item>
        <Menu.Item key="taxInformation">Income Tax/ GST/Other</Menu.Item>
        <Menu.Item key="fertilizerSale">Fertilizer Sale</Menu.Item>
        <Menu.Item key="agroInputs">Agro Inputs</Menu.Item>
        <Menu.Item key="salesCommitment">Sales Commitment</Menu.Item>
        <Menu.Item key="businessOperations">Business Operations</Menu.Item>
        <Menu.Item key="currentDealership">
          Current dealership details / Fertilizer/seeds/Pesticides/Others
        </Menu.Item>
        <Menu.Item key="documents">Documents</Menu.Item>
      </Menu>
      <Card
        title="Dealer Details"
        style={{ flex: 1, marginLeft: 16 }}
        headStyle={{ background: '#9542ef', color: 'white' }}
      >
        <Form onFinish={handleFormSubmit}>
          {currentMenu === 'registeredAddress' && (
            <Form.Item
              label="Registered Address"
              name="registeredAddress"
              rules={[{ required: true, message: 'Please enter the registered address' }]}
            >
            </Form.Item>
          )}
          {currentMenu === 'contactPersonDetails' && (
            <Form.Item label="Contact Person Details" name="contactPersonDetails">
            </Form.Item>
          )}
          {currentMenu === 'bankDetails' && (
            <Form.Item label="Bank Details" name="bankDetails">
            </Form.Item>
          )}
        </Form>
      </Card>
    </div>
  );
};

export default RightBoxForm;
