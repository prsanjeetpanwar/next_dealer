"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Option = antd_1.Select.Option;
var Title = antd_1.Typography.Title;
var GodownDetailsForm = function () {
    var form = antd_1.Form.useForm()[0];
    var _a = react_1.useState([{ key: 1 }]), godownForms = _a[0], setGodownForms = _a[1];
    var onFinish = function (values) {
        console.log('Form values:', values);
    };
    var addGodownForm = function () {
        var newFormKey = godownForms.length + 1;
        setGodownForms(__spreadArrays(godownForms, [{ key: newFormKey }]));
    };
    var removeGodownForm = function (formKey) {
        var updatedForms = godownForms.filter(function (form) { return form.key !== formKey; });
        setGodownForms(updatedForms);
    };
    var formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };
    var tailFormItemLayout = {
        wrapperCol: { offset: 8, span: 16 }
    };
    return (react_1["default"].createElement(antd_1.Form, { form: form, onFinish: onFinish, autoComplete: "off" },
        godownForms.map(function (godownForm) { return (react_1["default"].createElement("div", { key: godownForm.key, style: { marginBottom: '24px' } },
            react_1["default"].createElement(Title, { level: 4 },
                "Godown Details ",
                godownForm.key),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 12 },
                    react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "Address", name: "address_" + godownForm.key, rules: [{ required: true, message: 'Please enter the address' }] }),
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Enter address" })),
                    react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "Storage Capacity", name: "storageCapacity_" + godownForm.key, rules: [{ required: true, message: 'Please enter the storage capacity' }] }),
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Enter storage capacity" }))),
                react_1["default"].createElement(antd_1.Col, { span: 12 },
                    react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "Godown Type", name: "godownType_" + godownForm.key, rules: [{ required: true, message: 'Please select the godown type' }] }),
                        react_1["default"].createElement(antd_1.Select, { placeholder: "Select godown type" },
                            react_1["default"].createElement(Option, { value: "type1" }, "Type 1"),
                            react_1["default"].createElement(Option, { value: "type2" }, "Type 2"))))),
            react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailFormItemLayout),
                react_1["default"].createElement(antd_1.Checkbox, { name: "isPrimaryGodown_" + godownForm.key }, "Is Primary Godown"),
                godownForm.key !== 1 && (react_1["default"].createElement(antd_1.Button, { type: "danger", shape: "circle", icon: react_1["default"].createElement(icons_1.DeleteOutlined, null), size: "small", onClick: function () { return removeGodownForm(godownForm.key); }, style: { marginLeft: '8px' } }))))); }),
        react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailFormItemLayout),
            react_1["default"].createElement(antd_1.Space, null,
                react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit"),
                react_1["default"].createElement(antd_1.Button, { type: "default", shape: "circle", icon: react_1["default"].createElement(icons_1.PlusOutlined, null), onClick: addGodownForm })))));
};
exports["default"] = GodownDetailsForm;
