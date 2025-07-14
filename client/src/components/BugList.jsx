import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function BugList({ refresh }) {
  const [bugs, setBugs] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get(`${API_URL}/bugs`)
      .then((res) => setBugs(res.data))
      .catch((err) => console.error("❌ Failed to fetch bugs:", err));
  }, [refresh]);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${API_URL}/bugs/${id}`, { status });
      setBugs((prev) =>
        prev.map((bug) => (bug._id === id ? { ...bug, status } : bug))
      );
    } catch (err) {
      console.error("❌ Failed to update status:", err);
    }
  };

  const deleteBug = async (id) => {
    try {
      await axios.delete(`${API_URL}/bugs/${id}`);
      setBugs((prev) => prev.filter((bug) => bug._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete bug:", err);
    }
  };

  const filteredBugs =
    filter === "all" ? bugs : bugs.filter((bug) => bug.status === filter);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <label className="text-sm font-medium">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-3 py-1 text-sm text-gray-700 dark:bg-gray-600 dark:text-white"
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {filteredBugs.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No bugs reported yet.
        </p>
      ) : (
        filteredBugs.map((bug) => (
          <div
            key={bug._id}
            className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm mb-4"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {bug.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {bug.description}
            </p>

            <div className="flex items-center justify-between">
              <span
                className={`px-2 py-1 rounded text-sm font-semibold ${
                  bug.status === "open"
                    ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-white"
                    : bug.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-white"
                    : "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white"
                }`}
              >
                {bug.status === "open"
                  ? "🔴 Open"
                  : bug.status === "in-progress"
                  ? "🟡 In Progress"
                  : "✅ Resolved"}
              </span>

              <div className="flex items-center gap-2">
                <select
                  value={bug.status}
                  onChange={(e) => updateStatus(bug._id, e.target.value)}
                  className="border rounded px-3 py-1 text-sm dark:bg-gray-600 dark:text-white"
                >
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
                <button
                  onClick={() => deleteBug(bug._id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
