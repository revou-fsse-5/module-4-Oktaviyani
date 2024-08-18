import React from "react";
import { Link } from "react-router-dom";

interface WelcomeNewMemberProps {
  fullName: string;
}

const WelcomeNewMember: React.FC<WelcomeNewMemberProps> = ({ fullName }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Welcome, {fullName}!</h2>
      <p className="mt-4 text-lg">Thank you for registering with us. Your account is now set up.</p>
      <Link to="/">
        <button className="button mt-4">Login</button>
      </Link>
    </div>
  );
};

export default WelcomeNewMember;
