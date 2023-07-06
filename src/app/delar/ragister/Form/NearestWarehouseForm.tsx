import React, { useState } from 'react';
import { Button, Input, Form, Row, Col } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

interface Warehouse {
  id: number;
}

const NearestWarehouseForm: React.FC = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([{ id: 1 }]);

  const handleAddWarehouse = () => {
    const newWarehouseId = warehouses[warehouses.length - 1].id + 1;
    setWarehouses([...warehouses, { id: newWarehouseId }]);
  };

  const handleDeleteWarehouse = (id: number) => {
    const updatedWarehouses = warehouses.filter((warehouse) => warehouse.id !== id);
    setWarehouses(updatedWarehouses);
  };

  const onFinish = (values: any) => {
    console.log('Warehouses:', values.warehouses);
  };

  return (
    <Form onFinish={onFinish}>
      {warehouses.map((warehouse) => (
        <div key={warehouse.id}>
          <h2>Warehouse {warehouse.id}</h2>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name={['warehouses', warehouse.id, 'name']}
                label="Name of Warehouse"
                rules={[{ required: true, message: 'Please enter the name of the warehouse' }]}
              >
                <Input placeholder="Name of Warehouse" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={['warehouses', warehouse.id, 'distance']}
                label="Distance In KM"
                rules={[{ required: true, message: 'Please enter the distance in kilometers' }]}
              >
                <Input placeholder="Distance In KM" type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              {warehouses.length > 1 && (
                <Button
                  type="danger"
                  shape="circle"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDeleteWarehouse(warehouse.id)}
                />
              )}
            </Col>
          </Row>
          <hr />
        </div>
      ))}
      <Button type="dashed" onClick={handleAddWarehouse} style={{ marginBottom: '1rem' }}>
        <PlusOutlined /> Add Warehouse
      </Button>
      <div style={{ marginTop: 24 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default NearestWarehouseForm;
