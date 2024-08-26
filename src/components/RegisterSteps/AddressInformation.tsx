import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AddressInformation: React.FC = () => {
  return (
    <div>
      <h3>Address Information</h3>
      <div>
        <label htmlFor="addressInfo.street">Street</label>
        <Field type="text" name="addressInfo.street" />
        <ErrorMessage name="addressInfo.street" component="div" />
      </div>
      <div>
        <label htmlFor="addressInfo.city">City</label>
        <Field type="text" name="addressInfo.city" />
        <ErrorMessage name="addressInfo.city" component="div" />
      </div>
      <div>
        <label htmlFor="addressInfo.state">State</label>
        <Field type="text" name="addressInfo.state" />
        <ErrorMessage name="addressInfo.state" component="div" />
      </div>
      <div>
        <label htmlFor="addressInfo.zip">Zip Code</label>
        <Field type="text" name="addressInfo.zip" />
        <ErrorMessage name="addressInfo.zip" component="div" />
      </div>
    </div>
  );
};

export default AddressInformation;
