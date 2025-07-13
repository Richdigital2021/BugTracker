import React, { useState } from "react";
import axios from "axios";

export default function BugForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:5000/api/bugs", {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      onSuccess();
    } catch (err) {
      console.error(err);
      setError("🚨 Error creating bug. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 max-w-md">
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <label className="block mb-2">
        <span className="font-medium">Title</span>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-primary"
          placeholder="Bug title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label className="block mb-4">
        <span className="font-medium">Description</span>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-primary"
          placeholder="Describe the bug in detail"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 rounded bg-primary text-primary-foreground transition 
          ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"}`}
      >
        {loading ? "Submitting..." : "Submit Bug"}
      </button>
    </form>
  );
}
