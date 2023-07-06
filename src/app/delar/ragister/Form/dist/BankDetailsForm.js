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
var BankDetailsForm = function () {
    var form = antd_1.Form.useForm()[0];
    var _a = react_1.useState([{ key: 1 }]), bankForms = _a[0], setBankForms = _a[1];
    var onFinish = function (values) {
        console.log('Form values:', values);
    };
    var addBankForm = function () {
        var newFormKey = bankForms.length + 1;
        setBankForms(__spreadArrays(bankForms, [{ key: newFormKey }]));
    };
    var removeBankForm = function (formKey) {
        var updatedForms = bankForms.filter(function (form) { return form.key !== formKey; });
        setBankForms(updatedForms);
    };
    var formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };
    var tailFormItemLayout = {
        wrapperCol: { offset: 8, span: 16 }
    };
    return (react_1["default"].createElement(antd_1.Form, { form: form, onFinish: onFinish, autoComplete: "off" },
        bankForms.map(function (bankForm) { return (react_1["default"].createElement(antd_1.Row, { key: bankForm.key },
            react_1["default"].createElement(antd_1.Col, { span: 24 },
                react_1["default"].createElement(Title, { level: 4 }, "Bank Details")),
            react_1["default"].createElement(antd_1.Col, { span: 12 },
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "Bank Name", name: "bankName_" + bankForm.key, rules: [{ required: true, message: 'Please enter the bank name' }] }),
                            react_1["default"].createElement(antd_1.Input, { placeholder: "Enter bank name" }))),
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "IFSC Code", name: "ifscCode_" + bankForm.key, rules: [{ required: true, message: 'Please enter the IFSC code' }] }),
                            react_1["default"].createElement(antd_1.Input, { placeholder: "Enter IFSC code" }))),
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "Account Number", name: "accountNumber_" + bankForm.key, rules: [{ required: true, message: 'Please enter the account number' }] }),
                            react_1["default"].createElement(antd_1.Input, { placeholder: "Enter account number" }))))),
            react_1["default"].createElement(antd_1.Col, { span: 12 },
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "Type of Account", name: "accountType_" + bankForm.key, rules: [{ required: true, message: 'Please select the type of account' }] }),
                            react_1["default"].createElement(antd_1.Select, { placeholder: "Select account type" },
                                react_1["default"].createElement(Option, { value: "current" }, "Current Account"),
                                react_1["default"].createElement(Option, { value: "savings" }, "Savings Account")))),
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "City", name: "city_" + bankForm.key, rules: [{ required: true, message: 'Please enter the city' }] }),
                            react_1["default"].createElement(antd_1.Input, { placeholder: "Enter city" }))),
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, __assign({}, formItemLayout, { label: "Branch Name", name: "branchName_" + bankForm.key, rules: [{ required: true, message: 'Please enter the branch name' }] }),
                            react_1["default"].createElement(antd_1.Input, { placeholder: "Enter branch name" }))))),
            react_1["default"].createElement(antd_1.Col, { span: 24 },
                react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailFormItemLayout, { name: "isPrimaryBank_" + bankForm.key, valuePropName: "checked" }),
                    react_1["default"].createElement(antd_1.Checkbox, null, "Is Primary Bank"))),
            react_1["default"].createElement(antd_1.Col, { span: 24 }, bankForm.key !== 1 && (react_1["default"].createElement(antd_1.Button, { type: "danger", shape: "circle", icon: react_1["default"].createElement(icons_1.DeleteOutlined, null), size: "small", onClick: function () { return removeBankForm(bankForm.key); } }))))); }),
        react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailFormItemLayout),
            react_1["default"].createElement(antd_1.Space, null,
                react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit"),
                react_1["default"].createElement(antd_1.Button, { type: "default", shape: "circle", icon: react_1["default"].createElement(icons_1.PlusOutlined, null), onClick: addBankForm })))));
};
exports["default"] = BankDetailsForm;
