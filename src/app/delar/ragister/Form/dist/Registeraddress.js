"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var Option = antd_1.Select.Option;
var RegisterAddress = function () {
    var form = antd_1.Form.useForm()[0];
    react_1.useEffect(function () {
        form.resetFields();
    }, [form]);
    var onFinish = function (values) {
        antd_1.message.success('Processing complete!');
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Form, { form: form, onFinish: onFinish },
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "address1", label: "Address Line 1", rules: [{ required: true, message: 'Please enter Address Line 1' }] },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Address Line 1" })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "address2", label: "Address Line 2" },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Address Line 2" })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "address3", label: "Address Line 3" },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Address Line 3" })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "postalCode", label: "Postal Code", rules: [{ required: true, message: 'Please enter Postal Code' }] },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "Postal Code" })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "country", label: "Country", rules: [{ required: true, message: 'Please select Country' }] },
                        react_1["default"].createElement(antd_1.Select, { placeholder: "Select Country" },
                            react_1["default"].createElement(Option, { value: "country1" }, "Country 1"),
                            react_1["default"].createElement(Option, { value: "country2" }, "Country 2"))))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "state", label: "State", rules: [{ required: true, message: 'Please enter State' }] },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "State" })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "district", label: "District" },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "District" })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "city", label: "City", rules: [{ required: true, message: 'Please enter City' }] },
                        react_1["default"].createElement(antd_1.Input, { placeholder: "City" })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                react_1["default"].createElement(antd_1.Col, { span: 8 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "isPrimary", valuePropName: "checked" },
                        react_1["default"].createElement(antd_1.Checkbox, null, "Is Primary Address")))),
            react_1["default"].createElement("div", { style: { marginTop: 24 } },
                react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Save")))));
};
exports["default"] = RegisterAddress;
