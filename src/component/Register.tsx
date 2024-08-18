import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import WelcomeNewMember from "./WelcomeNewMember";

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const navigate = useNavigate();

  const handleRegisterSubmit = (values: { email: string; password: string; confirmPassword: string }) => {
    setFormData({ ...formData, ...values });
    setStep(2);
  };

  const handlePersonalInfoSubmit = (values: { fullName: string; email: string; dateOfBirth: string }) => {
    setFormData({ ...formData, ...values });
    setStep(3);
  };

  const handleAddressInfoSubmit = (values: { streetAddress: string; city: string; state: string; zipCode: string }) => {
    setFormData({ ...formData, ...values });
    navigate('/welcome', { state: { fullName: formData.fullName } }); // Navigate with state
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        {step === 1 && <RegisterForm onSubmit={handleRegisterSubmit} />}
        {step === 2 && <PersonalInformation onSubmit={handlePersonalInfoSubmit} />}
        {step === 3 && <AddressInformation onSubmit={handleAddressInfoSubmit} />}
      </div>
    </div>
  );
};

export default Register;
