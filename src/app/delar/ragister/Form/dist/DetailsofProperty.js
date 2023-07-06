"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var PropertyDetailsForm = function () {
    var _a = react_1.useState(1), formCount = _a[0], setFormCount = _a[1];
    var handleAddForm = function () {
        setFormCount(function (prevCount) { return prevCount + 1; });
    };
    var handleDeleteForm = function () {
        setFormCount(function (prevCount) { return prevCount - 1; });
    };
    var onFinish = function (values) {
        console.log('Property Details:', values);
    };
    return (react_1["default"].createElement(antd_1.Form, { onFinish: onFinish },
        Array.from({ length: formCount }, function (_, index) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
            react_1["default"].createElement(antd_1.Form.Item, { label: "Address", name: "address_" + index, rules: [{ required: true, message: 'Please enter the address' }] },
                react_1["default"].createElement(antd_1.Input, { placeholder: "Enter address" })),
            react_1["default"].createElement(antd_1.Form.Item, { label: "Estimated Value", name: "estimatedValue_" + index, rules: [{ required: true, message: 'Please enter the estimated value' }] },
                react_1["default"].createElement(antd_1.Input, { placeholder: "Enter estimated value", type: "number" })),
            react_1["default"].createElement(antd_1.Form.Item, { label: "Hypothecation Details", name: "hypothecationDetails_" + index, rules: [{ required: true, message: 'Please enter the hypothecation details' }] },
                react_1["default"].createElement(antd_1.Input.TextArea, { placeholder: "Enter hypothecation details", rows: 4 })),
            formCount > 1 && (react_1["default"].createElement(antd_1.Button, { type: "danger", icon: react_1["default"].createElement(icons_1.DeleteOutlined, null), onClick: handleDeleteForm, style: { marginBottom: '1rem' } }, "Delete")),
            react_1["default"].createElement("hr", null))); }),
        react_1["default"].createElement(antd_1.Space, null,
            react_1["default"].createElement(antd_1.Button, { type: "dashed", icon: react_1["default"].createElement(icons_1.PlusOutlined, null), onClick: handleAddForm }, "Add Form"),
            react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit"))));
};
exports["default"] = PropertyDetailsForm;
