import React from 'react';
import { FormikProps } from 'formik';

interface ReviewProps {
  formik: FormikProps<any>;
}

const Review: React.FC<ReviewProps> = ({ formik }) => {
  const { values } = formik;

  return (
    <div>
      <h2>Review Your Information</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {values.personalInfo.name}</p>
        <p>Email: {values.personalInfo.email}</p>
        <p>Birthdate: {values.personalInfo.birthdate}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Street: {values.addressInfo.street}</p>
        <p>City: {values.addressInfo.city}</p>
        <p>State: {values.addressInfo.state}</p>
        <p>Zip Code: {values.addressInfo.zip}</p>
      </div>
    </div>
  );
};

export default Review;
