"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_jsonschema_form_1 = require("react-jsonschema-form");
var schema = {
    type: 'object',
    properties: {
        firmName: { type: 'string', title: 'Name Of The Firm' },
        proprietorPartners: { type: 'string', title: 'Name Of The Proprietor/Partners' },
        organizationType: { type: 'string', title: 'Organization Type', "enum": ['type1', 'type2'] },
        dealerWebsite: { type: 'string', title: 'Dealer Website' },
        establishedYear: { type: 'integer', title: 'Established Year', minimum: 1900, maximum: 2023 },
        dealerCategory: { type: 'string', title: 'Dealer Category', "enum": ['category1', 'category2'] },
        dealerType: {
            type: 'array',
            title: 'Dealer Type',
            items: {
                type: 'string',
                "enum": ['existingDealer', 'firstTimeDealer'],
                enumNames: ['Existing Dealer (no. of years registered with us)', 'First Time Dealer']
            },
            uniqueItems: true
        },
        dealershipLocation: {
            type: 'object',
            title: 'Dealership Required At',
            properties: {
                village: { type: 'string', title: 'Village/Taluka' },
                district: { type: 'string', title: 'District' },
                state: { type: 'string', title: 'State' }
            },
            required: ['village', 'district', 'state']
        }
    },
    required: ['firmName', 'proprietorPartners', 'organizationType', 'establishedYear', 'dealerCategory', 'dealerType', 'dealershipLocation']
};
var uiSchema = {
    'ui:order': ['firmName', 'proprietorPartners', 'organizationType', 'dealerWebsite', 'establishedYear', 'dealerCategory', 'dealerType', 'dealershipLocation'],
    firmName: {
        'ui:placeholder': 'Enter the name of the firm'
    },
    proprietorPartners: {
        'ui:placeholder': 'Enter the name of the proprietor/partners'
    },
    organizationType: {
        'ui:placeholder': 'Select organization type'
    },
    dealerWebsite: {
        'ui:placeholder': 'Enter dealer website'
    },
    establishedYear: {
        'ui:placeholder': 'Enter established year'
    },
    dealerCategory: {
        'ui:placeholder': 'Select dealer category'
    },
    dealerType: {
        'ui:widget': 'checkboxes',
        'ui:options': {
            inline: true
        }
    },
    dealershipLocation: {
        village: {
            'ui:placeholder': 'Enter village/taluka'
        },
        district: {
            'ui:placeholder': 'Enter district'
        },
        state: {
            'ui:placeholder': 'Enter state'
        }
    }
};
var Delardetails = function () {
    var onSubmit = function (form) {
        console.log('Form values:', form.formData);
    };
    return (react_1["default"].createElement(react_jsonschema_form_1["default"], { schema: schema, uiSchema: uiSchema, onSubmit: onSubmit },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { type: "submit", className: "btn btn-primary" }, "Submit"))));
};
exports["default"] = Delardetails;
