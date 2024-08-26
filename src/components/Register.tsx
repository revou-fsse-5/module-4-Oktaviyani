import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddressInformation from './RegisterSteps/AddressInformation';
import Review from './RegisterSteps/Review';

const RegisterSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
    birthdate: Yup.date().required('Required').nullable()
  }),
  addressInfo: Yup.object().shape({
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.string().required('Required'),
  }),
});

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    try {
      // Check if the email already exists
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;

      const emailExists = users.some((user: any) => user.email === values.personalInfo.email);

      if (emailExists) {
        alert('Email already exists!');
        return;
      }

      // Save new user to db.json
      await axios.post('http://localhost:5000/users', {
        name: values.personalInfo.name,
        email: values.personalInfo.email,
        password: values.personalInfo.password, // Save password
        birthdate: values.personalInfo.birthdate, // Save birthdate
        address: {
          street: values.addressInfo.street,
          city: values.addressInfo.city,
          state: values.addressInfo.state,
          zip: values.addressInfo.zip,
        },
      });

      alert('Registration successful!');
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      console.error('There was an error registering the user:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <Formik
        initialValues={{
          personalInfo: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            birthdate: '',
          },
          addressInfo: {
            street: '',
            city: '',
            state: '',
            zip: '',
          },
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            {currentStep === 1 && (
              <>
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
                <div>
                  <label htmlFor="personalInfo.password">Password</label>
                  <Field type="password" name="personalInfo.password" />
                  <ErrorMessage name="personalInfo.password" component="div" />
                </div>
                <div>
                  <label htmlFor="personalInfo.confirmPassword">Confirm Password</label>
                  <Field type="password" name="personalInfo.confirmPassword" />
                  <ErrorMessage name="personalInfo.confirmPassword" component="div" />
                </div>
                <div>
                  <label htmlFor="personalInfo.birthdate">Birthdate</label>
                  <Field type="date" name="personalInfo.birthdate" />
                  <ErrorMessage name="personalInfo.birthdate" component="div" />
                </div>
                <button type="button" onClick={() => setCurrentStep(2)}>Next</button>
              </>
            )}
            {currentStep === 2 && (
              <>
                <AddressInformation />
                <button type="button" onClick={() => setCurrentStep(1)}>Back</button>
                <button type="button" onClick={() => setCurrentStep(3)}>Next</button>
              </>
            )}
            {currentStep === 3 && (
              <>
                <Review formik={formik} />
                <button type="button" onClick={() => setCurrentStep(2)}>Back</button>
                <button type="submit">Register</button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
