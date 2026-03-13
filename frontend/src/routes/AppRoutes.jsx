import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import IpoList from "../pages/IpoList";
import IpoDetail from "../pages/IpoDetail";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ipos" element={<IpoList />} />
      <Route path="/ipo/:id" element={<IpoDetail />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
