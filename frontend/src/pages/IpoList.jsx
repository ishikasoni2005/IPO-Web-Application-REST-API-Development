// src/pages/IpoList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getIpos } from "../services/ipoService";

const IpoList = () => {
  const [ipos, setIpos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const data = await getIpos();
        setIpos(data);
      } catch (error) {
        console.error("Error fetching IPOs:", error);
      }
    };
    fetchIPOs();
  }, []);

  const filteredIPOs = ipos
    .filter((ipo) => {
      const companyName = ipo.company_name ?? "";
      const status = ipo.status ?? "";
      const matchesSearch = companyName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        status.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const priceA = a.issue_price ?? 0;
      const priceB = b.issue_price ?? 0;

      if (sortOption === "priceHigh") return priceB - priceA;
      if (sortOption === "priceLow") return priceA - priceB;
      if (sortOption === "dateLatest")
        return new Date(b.issue_date) - new Date(a.issue_date);
      if (sortOption === "dateOldest")
        return new Date(a.issue_date) - new Date(b.issue_date);
      return 0;
    });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📈 IPO Listings</h2>

      {/* 🔍 Search + Filter + Sort Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by company..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-md"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Closed">Closed</option>
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Sort By</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="dateLatest">Date: Latest</option>
          <option value="dateOldest">Date: Oldest</option>
        </select>
      </div>

      {/* 📋 IPO Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredIPOs.length > 0 ? (
          filteredIPOs.map((ipo) => (
            <div key={ipo.id} className="border p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold">{ipo.company_name}</h3>
              <p>Status: <span className="font-medium">{ipo.status}</span></p>
              <p>Issue Price: ₹{ipo.issue_price ?? "N/A"}</p>
              <p>Issue Date: {ipo.issue_date}</p>
              <p>Lot Size: {ipo.lot_size ?? "N/A"}</p>
              <p>Market Lot: {ipo.market_lot ?? "N/A"}</p>
              <Link
                to={`/ipo/${ipo.id}`}
                className="inline-block mt-3 text-indigo-700 font-medium hover:underline"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No IPOs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default IpoList;
