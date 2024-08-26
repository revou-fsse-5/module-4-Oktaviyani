import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PersonalInformation: React.FC = () => {
  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label htmlFor="personalInfo.name">Name</label>
        <Field type="text" name="personalInfo.name" />
        <ErrorMessage name="personalInfo.name" component="div" />
      </div>
      <div>
        <label htmlFor="personalInfo.email">Email</label>
        <Field type="email" name="personalInfo.email" />
        <ErrorMessage name="personalInfo.email" component="div" />
      </div>
    </div>
  );
};

export default PersonalInformation;
