import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const Login: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      // Fetch users from the mock server
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;

      // Check if the user exists and password matches
      const user = users.find((user: any) => user.email === values.email && user.password === values.password);

      if (user) {
        // Redirect to ProductPage if login is successful
        navigate('/productpage');
      } else {
        alert('Invalid email or password!');
      }
    } catch (error) {
      console.error('There was an error logging in:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <div className="register-container">
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
