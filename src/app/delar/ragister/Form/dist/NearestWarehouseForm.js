"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var NearestWarehouseForm = function () {
    var _a = react_1.useState([{ id: 1 }]), warehouses = _a[0], setWarehouses = _a[1];
    var handleAddWarehouse = function () {
        var newWarehouseId = warehouses[warehouses.length - 1].id + 1;
        setWarehouses(__spreadArrays(warehouses, [{ id: newWarehouseId }]));
    };
    var handleDeleteWarehouse = function (id) {
        var updatedWarehouses = warehouses.filter(function (warehouse) { return warehouse.id !== id; });
        setWarehouses(updatedWarehouses);
    };
    var onFinish = function (values) {
        console.log('Warehouses:', values.warehouses);
    };
    return (react_1["default"].createElement(antd_1.Form, { onFinish: onFinish },
        warehouses.map(function (warehouse) { return (react_1["default"].createElement("div", { key: warehouse.id },
            react_1["default"].createElement("h2", null,
                "Warehouse ",
                warehouse.id),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: ['warehouses', warehouse.id, 'name'], label: "Name of Warehouse", rules: [{ required: true, message: 'Please enter the name of the warehouse' }] },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Name of Warehouse" }))),
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: ['warehouses', warehouse.id, 'distance'], label: "Distance In KM", rules: [{ required: true, message: 'Please enter the distance in kilometers' }] },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Distance In KM", type: "number" }))),
                react_1["default"].createElement(antd_1.Col, { span: 8 }, warehouses.length > 1 && (react_1["default"].createElement(antd_1.Button, { type: "danger", shape: "circle", icon: react_1["default"].createElement(icons_1.DeleteOutlined, null), onClick: function () { return handleDeleteWarehouse(warehouse.id); } })))),
            react_1["default"].createElement("hr", null))); }),
        react_1["default"].createElement(antd_1.Button, { type: "dashed", onClick: handleAddWarehouse, style: { marginBottom: '1rem' } },
            react_1["default"].createElement(icons_1.PlusOutlined, null),
            " Add Warehouse"),
        react_1["default"].createElement("div", { style: { marginTop: 24 } },
            react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit"))));
};
exports["default"] = NearestWarehouseForm;
