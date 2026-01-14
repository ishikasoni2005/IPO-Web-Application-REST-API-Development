import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">Welcome to IPO WebApp 🚀</h1>
        <p className="text-lg text-gray-600 mb-6">
          Analyze upcoming IPOs, discover insights, and make informed investment decisions.
        </p>
        <button
          onClick={() => navigate("/ipos")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
