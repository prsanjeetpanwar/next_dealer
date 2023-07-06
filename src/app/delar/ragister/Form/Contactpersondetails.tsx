import React, { useState } from 'react';
import { Button, Input, Form, Row, Col, Checkbox } from 'antd';
import 'react-icons';

const RegisterPersons: React.FC = () => {
  const [persons, setPersons] = useState([{ id: 1 }]); 

  const handleAddPerson = () => {
    const newPersonId = persons[persons.length - 1].id + 1;
    setPersons([...persons, { id: newPersonId }]);
  };

  const handleDeletePerson = (id: number) => {
    const updatedPersons = persons.filter((person) => person.id !== id);
    setPersons(updatedPersons);
  };

  const onFinish = (values: any) => {
    console.log('Persons:', values.persons);
  };

  return (
    <Form onFinish={onFinish}>
      {persons.map((person) => (
        <div key={person.id}>
          <h2>Person {person.id}</h2>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name={['persons', person.id, 'name']}
                label="Name"
                rules={[{ required: true, message: 'Please enter Name' }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name={['persons', person.id, 'email']}
                label="Email"
                rules={[{ required: true, message: 'Please enter Email' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name={['persons', person.id, 'designation']} label="Designation">
                <Input placeholder="Designation" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name={['persons', person.id, 'dob']} label="DOB">
                <Input placeholder="DOB" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name={['persons', person.id, 'isAuthorized']} valuePropName="checked">
                <Checkbox>Is Authorized Decision Maker</Checkbox>
              </Form.Item>
            </Col>
          </Row>
          {persons.length > 1 && (
            <Button onClick={() => handleDeletePerson(person.id)}>Delete</Button>
          )}
          <hr />
        </div>
      ))}
      <Button type="dashed" onClick={handleAddPerson} style={{ marginBottom: '1rem' }}>
        Add Person
      </Button>
      <div style={{ marginTop: 24 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default RegisterPersons;
