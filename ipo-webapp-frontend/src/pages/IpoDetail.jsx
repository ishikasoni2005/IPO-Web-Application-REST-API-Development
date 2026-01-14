// src/pages/IpoDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function IpoDetail() {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ipos/${id}`)
      .then((res) => setIpo(res.data))
      .catch(() => setIpo(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center">Loading…</div>;
  if (!ipo) return <div className="text-red-600 font-bold text-center">IPO not found.</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-200">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{ipo.company_name}</h1>
      <div className="space-y-3 text-gray-800">
        <p><strong>🗓 Issue Date:</strong> {ipo.issue_date}</p>
        <p><strong>💸 Price Band:</strong> ₹{ipo.price_band}</p>
        <p><strong>📦 Lot Size:</strong> {ipo.lot_size}</p>
        <p className="text-gray-700 mt-4">{ipo.description}</p>
      </div>
      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
        Apply Now
      </button>
    </div>
  );
}
