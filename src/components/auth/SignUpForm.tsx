// SignUpForm.tsx
import React from "react";
import FormInput from "./FormInput";

interface Props {
    toggleForm: () => void;
}

const SignUpForm: React.FC<Props> = ({ toggleForm }) => {
    return (
        <form className="bg-black/70 p-4 sm:p-10 rounded-lg text-white flex flex-col w-[400px]">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <FormInput type="text" placeholder="Name" />
            <FormInput type="email" placeholder="Email" />
            <FormInput type="password" placeholder="Password" />
            <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
            >
                Sign Up
            </button>
            <p className="mt-4 text-gray-400 text-sm">
                Already have an account?{" "}
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
