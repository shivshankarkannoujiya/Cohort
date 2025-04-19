import React, { useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // for navigation
  // Return: method => useNavigate() => navigate(method)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      console.log(`Trying to do a signup`);
      // Variable comming from useState hook{name, email, password}
      const data = await apiClient.signup(name, email, password);
      console.log(`Signup response: `, data);

      if (data.success) {
        navigate("/login");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setError(data.message ?? "Signup Failed");
      }
    } catch (error) {
      console.error("Error while signup: ", error);
      setError("An unexpected error occured. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-emerald-800 p-10 w-[500px] flex flex-col items-center justify-center rounded-md">
        <h1 className="text-3xl font-bold mb-2">Welcome to Signup page</h1>
        {error && <p className="text-red-600 text-sm mt-2">Error: {error}</p>}

        <form
          onSubmit={handleSubmit}
          className=" p-3 flex flex-col w-full gap-3"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="px-3 py-2 outline-none border border-gray-500 placeholder:text-gray-600 rounded"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="px-3 py-2 outline-none border border-gray-500 placeholder:text-gray-600 rounded"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your name..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="px-3 py-2 outline-none border border-gray-500 placeholder:text-gray-600 rounded"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              placeholder="Enter your name..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-800 px-3 py-2 mt-2 rounded cursor-pointer hover:bg-emerald-900 transition-all text-xl"
          >
            {loading ? "Signup....." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
