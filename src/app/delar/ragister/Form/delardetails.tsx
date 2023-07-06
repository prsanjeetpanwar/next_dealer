import React from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  type: 'object',
  properties: {
    firmName: { type: 'string', title: 'Name Of The Firm' },
    proprietorPartners: { type: 'string', title: 'Name Of The Proprietor/Partners' },
    organizationType: { type: 'string', title: 'Organization Type', enum: ['type1', 'type2'] },
    dealerWebsite: { type: 'string', title: 'Dealer Website' },
    establishedYear: { type: 'integer', title: 'Established Year', minimum: 1900, maximum: 2023 },
    dealerCategory: { type: 'string', title: 'Dealer Category', enum: ['category1', 'category2'] },
    dealerType: {
      type: 'array',
      title: 'Dealer Type',
      items: {
        type: 'string',
        enum: ['existingDealer', 'firstTimeDealer'],
        enumNames: ['Existing Dealer (no. of years registered with us)', 'First Time Dealer'],
      },
      uniqueItems: true,
    },
    dealershipLocation: {
      type: 'object',
      title: 'Dealership Required At',
      properties: {
        village: { type: 'string', title: 'Village/Taluka' },
        district: { type: 'string', title: 'District' },
        state: { type: 'string', title: 'State' },
      },
      required: ['village', 'district', 'state'],
    },
  },
  required: ['firmName', 'proprietorPartners', 'organizationType', 'establishedYear', 'dealerCategory', 'dealerType', 'dealershipLocation'],
};

const uiSchema = {
  'ui:order': ['firmName', 'proprietorPartners', 'organizationType', 'dealerWebsite', 'establishedYear', 'dealerCategory', 'dealerType', 'dealershipLocation'],
  firmName: {
    'ui:placeholder': 'Enter the name of the firm',
  },
  proprietorPartners: {
    'ui:placeholder': 'Enter the name of the proprietor/partners',
  },
  organizationType: {
    'ui:placeholder': 'Select organization type',
  },
  dealerWebsite: {
    'ui:placeholder': 'Enter dealer website',
  },
  establishedYear: {
    'ui:placeholder': 'Enter established year',
  },
  dealerCategory: {
    'ui:placeholder': 'Select dealer category',
  },
  dealerType: {
    'ui:widget': 'checkboxes',
    'ui:options': {
      inline: true,
    },
  },
  dealershipLocation: {
    village: {
      'ui:placeholder': 'Enter village/taluka',
    },
    district: {
      'ui:placeholder': 'Enter district',
    },
    state: {
      'ui:placeholder': 'Enter state',
    },
  },
};

const Delardetails: React.FC = () => {
  const onSubmit = (form: any) => {
    console.log('Form values:', form.formData);
  };

  return (
    <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit}>
      <div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </Form>
  );
};

export default Delardetails;