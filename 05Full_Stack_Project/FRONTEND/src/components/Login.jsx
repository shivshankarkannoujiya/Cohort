import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
  };

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="flex flex-col  border-2 border-emerald-400 p-10 w-[400px] justify-center items-center gap-5 rounded">
        <h1 className="text-2xl font-bold">Welcome to Login</h1>
        {error && <p className="text-sm text-red-600">Error: {error}</p>}
        <form
          onSubmit={handleLogin}
          className=" flex flex-col p-3 gap-3 w-full"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="px-3 py-2 outline-none border border-gray-500 rounded placeholder:text-gray-600"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">
              Password
            </label>
            <input
              className="px-3 py-2 outline-none border border-gray-500 rounded placeholder:text-gray-600"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Enter your password..."
            />
          </div>

          <button className="border-none bg-emerald-800 px-3 py-2 mt-3 text-xl rounded cursor-pointer hover:bg-emerald-900 transition-colors ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
