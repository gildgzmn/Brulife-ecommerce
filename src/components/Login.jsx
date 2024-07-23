import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
import image from '../assets/LoginBackground.png';

const Login = ({ canResetPassword, route }) => {
  const [data, setData] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleInputChange = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white p-10 rounded shadow-md w-full max-w-lg mt-12 mb-12"> {/* Changed background to white */}
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontSize: '4.05rem' }}>Log in</h1>
        <p className="mb-6 text-center">Enter your email address and password to login</p>
        
        <form onSubmit={submit} className="space-y-8">
          <div>
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 text-gray-700" // Gray background and text color
              autoComplete="username"
              isFocused={true}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 text-gray-700" // Gray background and text color
              autoComplete="current-password"
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="block mt-4">
            <label className="flex items-center">
              <Checkbox
                name="remember"
                checked={data.remember}
                onChange={(e) => handleInputChange('remember', e.target.checked)}
              />
              <span className="ms-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="flex flex-col items-center justify-center mt-4">
            {canResetPassword && (
              <Link
                to={route('password.request')}
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
              >
                Forgot your password?
              </Link>
            )}

            <PrimaryButton className="w-full text-center" disabled={processing}>
              Log in
            </PrimaryButton>
          </div>
        </form>

        <div className="flex items-center justify-center my-6">
          <span className="w-[30%] border-b"></span>
          <span className="px-3 py-2 text-gray-500">or continue with</span>
          <span className="w-[30%] border-b"></span>
        </div>

        <button className="w-full border p-3 rounded flex items-center justify-center">
          <img src="../src/assets/google.png" alt="Google Logo" className="w-6 h-6 mr-2" />
          Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          By clicking continue, you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
        </p>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account yet? <a href="/register" className="text-blue-500">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

// Placeholder components for InputLabel, TextInput, InputError, Checkbox, and PrimaryButton
const InputLabel = ({ htmlFor, value }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {value}
  </label>
);

const TextInput = ({ id, type, name, value, className, autoComplete, isFocused, onChange }) => (
  <input
    id={id}
    type={type}
    name={name}
    value={value}
    className={className}
    autoComplete={autoComplete}
    autoFocus={isFocused}
    onChange={onChange}
  />
);

const InputError = ({ message, className }) => (
  message ? <p className={className + " text-sm text-red-600"}>{message}</p> : null
);

const Checkbox = ({ name, checked, onChange }) => (
  <input
    type="checkbox"
    name={name}
    checked={checked}
    onChange={onChange}
    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
  />
);

const PrimaryButton = ({ className, disabled, children }) => (
  <button
    type="submit"
    className={`inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);
