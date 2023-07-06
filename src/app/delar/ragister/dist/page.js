"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var delardetails_1 = require("./Form/delardetails");
var Registeraddress_1 = require("./Form/Registeraddress");
var Contactpersondetails_1 = require("./Form/Contactpersondetails");
var BankDetailsForm_1 = require("./Form/BankDetailsForm");
var GodownDetails_1 = require("./Form/GodownDetails");
var NearestWarehouseForm_1 = require("./Form/NearestWarehouseForm");
var SubMenu = antd_1.Menu.SubMenu;
var RightBoxForm = function () {
    var _a = react_1.useState('dealerDetails'), currentMenu = _a[0], setCurrentMenu = _a[1];
    var _b = react_1.useState({
        dealerDetails: '',
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
        documents: ''
    }), values = _b[0], setValues = _b[1];
    var handleMenuClick = function (e) {
        setCurrentMenu(e.key);
    };
    var handleFormSubmit = function (values) {
        setValues(values);
    };
    // const calculateProgress = () => {
    //   const totalFields = Object.keys(values).length;
    //   const completedFields = Object.values(values).filter((value) => value !== '').length;
    //   const progressPercentage = (completedFields / totalFields) * 100;
    //   return Math.round(progressPercentage);
    // };
    var getTitleByMenuKey = function (menuKey) {
        switch (menuKey) {
            case 'dealerDetails':
                return 'Dealer Details';
            case 'registeredAddress':
                return 'Registered Address';
            case 'contactPersonDetails':
                return 'Contact Person Details';
            case 'bankDetails':
                return 'Bank Details';
            case 'godownDetails':
                return 'Godown Details';
            case 'nearestWarehouse':
                return 'Nearest Warehouse';
            case 'propertyDetails':
                return 'Details of Property of Proprietor/Partner/Firm';
            case 'registrationDetails':
                return 'Registration Details';
            case 'financialInformation':
                return 'Financial Information';
            case 'taxInformation':
                return 'Income Tax/ GST/Other';
            case 'fertilizerSale':
                return 'Fertilizer Sale';
            case 'agroInputs':
                return 'Agro Inputs';
            case 'salesCommitment':
                return 'Sales Commitment';
            case 'businessOperations':
                return 'Business Operations';
            case 'currentDealership':
                return 'Current dealership details / Fertilizer/seeds/Pesticides/Others';
            case 'documents':
                return 'Documents';
            default:
                return '';
        }
    };
    var cardTitle = getTitleByMenuKey(currentMenu);
    return (react_1["default"].createElement("div", { style: { display: 'flex', height: '50vw' } },
        react_1["default"].createElement(antd_1.Menu, { mode: "vertical", theme: "light", style: { width: 250 }, selectedKeys: [currentMenu], onClick: handleMenuClick },
            react_1["default"].createElement(antd_1.Menu.Item, { key: "registeredAddress", style: { height: 50, background: '#9542ef', color: 'white', display: 'flex', alignItems: 'center' } },
                react_1["default"].createElement("h3", { style: { margin: 10, marginRight: 9, marginTop: 30 } }, "Form"),
                react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center' } })),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "dealerDetails" }, "Dealer Details "),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "registeredAddress" }, "Registered Address"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "contactPersonDetails" }, "Contact Person Details"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "bankDetails" }, "Bank Details"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "godownDetails" }, "Godown Details"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "nearestWarehouse" }, "Nearest Warehouse"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "propertyDetails" }, "Details of Property of Proprietor/Partner/Firm"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "registrationDetails" }, "Registration Details"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "financialInformation" }, "Financial Information"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "taxInformation" }, "Income Tax/ GST/Other"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "fertilizerSale" }, "Fertilizer Sale"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "agroInputs" }, "Agro Inputs"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "salesCommitment" }, "Sales Commitment"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "businessOperations" }, "Business Operations"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "currentDealership" }, "Current dealership details / Fertilizer/seeds/Pesticides/Others"),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "documents" }, "Documents")),
        react_1["default"].createElement(antd_1.Card, { title: cardTitle, style: { flex: 1, marginLeft: 16 }, headStyle: { background: '#9542ef', color: 'white' } },
            react_1["default"].createElement(antd_1.Form, { onFinish: handleFormSubmit },
                currentMenu === 'dealerDetails' && (react_1["default"].createElement(antd_1.Form.Item, { label: "Dealer Details", name: "dealerDetails" },
                    react_1["default"].createElement(delardetails_1["default"], null))),
                currentMenu === 'registeredAddress' && (react_1["default"].createElement(antd_1.Form.Item, { label: "Registered Address", name: "registeredAddress" },
                    react_1["default"].createElement(Registeraddress_1["default"], null))),
                currentMenu === 'contactPersonDetails' && (react_1["default"].createElement(antd_1.Form.Item, { label: "Contact Person Details", name: "contactPersonDetails" },
                    react_1["default"].createElement(Contactpersondetails_1["default"], null))),
                currentMenu === 'bankDetails' && (react_1["default"].createElement(antd_1.Form.Item, { label: "Bank Details", name: "bankDetails" },
                    react_1["default"].createElement(BankDetailsForm_1["default"], null))),
                currentMenu === 'godownDetails' && (react_1["default"].createElement(antd_1.Form.Item, { label: "Godown Details", name: "godownDetails" },
                    react_1["default"].createElement(GodownDetails_1["default"], null))),
                currentMenu === 'nearestWarehouse' && (react_1["default"].createElement(antd_1.Form.Item, { label: "Nearest Warehouse", name: "nearestWarehouse" },
                    react_1["default"].createElement(NearestWarehouseForm_1["default"], null))),
                currentMenu === 'propertyDetails' && (react_1["default"].createElement(antd_1.Form.Item, { label: "Details of Property of Proprietor/Partner/Firm", name: "propertyDetails" },
                    react_1["default"].createElement(PropertyDetailsForm, null)))))));
};
exports["default"] = RightBoxForm;
