import React from "react";
import FormInput from "./FormInput";
import { useSignUpFormStore } from "../../stores/useSignUpFormStore";
import type { SignUpData } from "../../validation/authSchema";
import { auth } from "../../utils/firebase";
import { toast } from "react-toastify";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

interface Props {
  toggleForm: () => void;
}

const SignUpForm: React.FC<Props> = ({ toggleForm }) => {
  const { data, setField, errors, validate } = useSignUpFormStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as keyof SignUpData, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const isValid = validate();
  if (!isValid) return;

  const { name, email, password } = data;

  if (!name || !email || !password) {
    toast.error("Please fill out all required fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, { displayName: name })
        .then(() => {
          toast.success(`Welcome, ${name}! 🎉`);
        })
        .catch(() => {
          toast.warning("Signup successful, but failed to save name.");
        });

      // Optional: redirect or reset form
    })
    .catch((error) => {
      toast.error(`Signup failed: ${error.message}`);
    });
};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/70 p-4 sm:p-10 rounded-lg text-white flex flex-col w-[400px] space-y-4"
    >
      <h2 className="text-3xl font-bold">Sign Up</h2>

      <FormInput
        type="text"
        name="name"
        placeholder="Name"
        value={data.name ?? ""}
        onChange={handleChange}
        error={errors.name}
      />

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
        Sign Up
      </button>

      <p className="text-gray-400 text-sm">
        Already have an account?
        <button
          type="button"
          onClick={toggleForm}
          className="text-blue-500 hover:underline ml-1"
        >
          Sign in
        </button>
      </p>
    </form>
  );
};

export default SignUpForm;
