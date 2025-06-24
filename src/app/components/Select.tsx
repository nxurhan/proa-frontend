"use client";

import React from "react";

interface StateSelectProps {
  selected: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function StateSelect({
  selected,
  onChange,
  options,
}: StateSelectProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Filter by State
      </label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
