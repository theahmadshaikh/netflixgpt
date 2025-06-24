import React from "react";
import FormInput from "./FormInput";
import { useSignInFormStore } from "../../stores/useSignInFormStore";
import type { SignInData } from "../../validation/authSchema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { toast } from "react-toastify";

interface Props {
  toggleForm: () => void;
}

const SignInForm: React.FC<Props> = ({ toggleForm }) => {
  const { data, setField, errors, validate, reset } = useSignInFormStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as keyof SignInData, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid && data.email && data.password) {
      signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        toast.success(`Welcome back, ${user.displayName || user.email}! 🎉`);
        reset();
      }).catch((error) => {
        toast.error(`Sign-in failed: ${error.message}`);
      });
      
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/70 p-4 sm:p-10 rounded-lg text-white flex flex-col w-[400px] space-y-4"
    >
      <h2 className="text-3xl font-bold">Sign In</h2>

      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        value={data.email ?? ""}
        onChange={handleChange}
        error={errors.email}
      />

      <FormInput
        type="password"
        name="password"
        placeholder="Password"
        value={data.password ?? ""}
        onChange={handleChange}
        error={errors.password}
      />

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 py-3 rounded font-semibold cursor-pointer"
      >
        Sign In
      </button>

      <p className="text-gray-400 text-sm">
        Don't have an account?
        <button
          type="button"
          onClick={toggleForm}
          className="text-blue-500 hover:underline ml-1"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default SignInForm;
