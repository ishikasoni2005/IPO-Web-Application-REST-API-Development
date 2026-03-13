// src/pages/IpoDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getIpoById } from "../services/ipoService";

export default function IpoDetail() {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getIpoById(id)
      .then((data) => {
        if (isMounted) {
          setIpo(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIpo(null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
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
