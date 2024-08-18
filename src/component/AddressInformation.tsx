import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface AddressInfoFormValues {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

interface AddressInformationProps {
  onSubmit: (values: AddressInfoFormValues) => void;
}

const AddressInformation: React.FC<AddressInformationProps> = ({ onSubmit }) => {
  const initialValues: AddressInfoFormValues = {
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const validationSchema = Yup.object({
    streetAddress: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string()
      .matches(/^\d{5}(-\d{4})?$/, "Invalid Zip Code format")
      .required("Zip Code is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values); // Call onSubmit passed from props
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Street Address
            </label>
            <Field
              id="streetAddress"
              name="streetAddress"
              type="text"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="streetAddress"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <Field
              id="city"
              name="city"
              type="text"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <Field
              id="state"
              name="state"
              type="text"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="state"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <Field
              id="zipCode"
              name="zipCode"
              type="text"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="zipCode"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddressInformation;
