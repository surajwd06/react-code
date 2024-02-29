import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="w-full justify-center bg-slate-600 p-5 ">
      <h2 className="font-bold text-4xl">Login</h2>
      <div className=" w-full flex flex-col text-center">
        <input
          className="border p-2 my-5"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="usename"
        />
        <input
          className="border p-2"
          type={!showPassword ? "password" : "text"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <p onClick={() => setShowPassword(!showPassword)}>show</p>
        <button onClick={handleSubmit} className="border p-2 my-5">
          submit
        </button>
      </div>
    </div>
  );
};

export default Login;
