import React, { useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const loading=false
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
          return setErrorMessage("Plase fill out all fields.");
        }
    }
  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
      
      {/* right */}
      <div className="flex-1">
        <form className="flex flex-col gap-4" 
        onSubmit={handleSubmit}
        >
          <div>
            <Label value="Your username" />
            <TextInput
              type="text"
              placeholder="Username"
              id="username"
            //   onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your email" />
            <TextInput
              type="email"
              placeholder="email@company"
              id="email"
            //   onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
            //   onChange={handleChange}
            />
          </div>
          <Button
          className='bg-red-300'
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            Sugn in
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to="/signin" className="text-blue-500">
            {loading ? (
              <>
                <Spinner size="sm" />
                <span>Loading...</span>
              </>
            ) : (
              "Sign up"
            )}
          </Link>
        </div>
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  </div>
  )
}

export default SignUp