import React, { useState } from "react";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [showpwd, setshowpwd] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setLoading(false);
      }, 1000);
    } else {
      setErrors(validationErrors);
      setLoading(false);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regularExpression = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/  
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!(regularExpression.test(data.password)) ) {
    console.log("tttttttt",data)
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  return (
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-3 bg-slate-300 rounded-sm my-20">
      <div className="flex-1">
        <form
          className="w-full flex flex-col leading-9 gap-4"
          onSubmit={handleSubmit}
        >
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-red-700">{errors.email}</span>
            )}
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type={`${showpwd?"text":"password"}`}
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span onClick={()=>setshowpwd(!showpwd)}>show</span>
            {errors.password && (
              <span className="text-red-700">{errors.password}</span>
            )}
          </div>
          <Button
            className="bg-red-300"
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span>Loading...</span>
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Don't have an account?</span>
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
