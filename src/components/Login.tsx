// Login.tsx
import { useState } from "react";
import Header from "./Header";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div className="relative h-screen w-full bg-black sm:bg-transparent">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt=""
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
      />

      <Header />

      <div className="flex sm:items-center sm:justify-center h-full">
        {isSignInForm ? (
          <SignInForm toggleForm={toggleForm} />
        ) : (
          <SignUpForm toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default Login;
