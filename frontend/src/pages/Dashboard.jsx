// src/pages/Dashboard.jsx
import { useState } from "react";

import { createIpo } from "../services/ipoService";

export default function Dashboard() {
  const [form, setForm] = useState({
    company_name: "",
    issue_date: "",
    price_band: "",
    lot_size: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createIpo({
        ...form,
        lot_size: form.lot_size ? Number(form.lot_size) : null,
      });
      alert("IPO added successfully!");
      setForm({
        company_name: "",
        issue_date: "",
        price_band: "",
        lot_size: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding IPO");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Add New IPO</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="company_name"
          placeholder="Company Name"
          value={form.company_name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="issue_date"
          type="date"
          placeholder="Issue Date"
          value={form.issue_date}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="price_band"
          placeholder="Price Band (e.g., 100 - 120)"
          value={form.price_band}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="lot_size"
          type="number"
          placeholder="Lot Size"
          value={form.lot_size}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Adding..." : "Add IPO"}
        </button>
      </form>
    </div>
  );
}
