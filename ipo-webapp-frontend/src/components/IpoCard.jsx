import { Link } from "react-router-dom";

export default function IpoCard({ ipo }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{ipo.companyName}</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        <li><strong>📅 Issue Date:</strong> {ipo.issueDate}</li>
        <li><strong>💸 Price Band:</strong> ₹{ipo.priceBand}</li>
        <li><strong>📦 Lot Size:</strong> {ipo.lotSize}</li>
      </ul>
      <p className="text-sm mt-4 text-gray-600">{ipo.description}</p>
      <Link
        to={`/ipo/${ipo.id}`}
        className="mt-5 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
