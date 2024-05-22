import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const FilterModal = ({ show, onClose, setFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [sortBy, setSortBy] = useState("publishedAt");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    let filters = {
      category: selectedCategory,
      from: dateRange.from,
      to: dateRange.to,
      sortBy,
    };

    setFilters(filters);
  }, [selectedCategory, dateRange, sortBy, setFilters]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-11/12 max-w-md mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes
          className="absolute -top-10 right-0 cursor-pointer text-white hover:bg-gray-400 p-2 rounded-full"
          onClick={onClose}
          size={36}
        />
        <div className="bg-sky-950 text-white rounded-lg p-8 relative">
          <div className="mb-4">
            <h3 className="font-bold mb-2 text-start">Category</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Business",
                "Entertainment",
                "General",
                "Health",
                "Science",
                "Sports",
                "Technology",
              ].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 border rounded-full ${
                    selectedCategory === category
                      ? "bg-white text-sky-950 border-white"
                      : "bg-transparent text-white border-white"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-2 text-start">Date Range</h3>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <input
                type="date"
                name="from"
                value={dateRange.from}
                onChange={handleDateRangeChange}
                className="border p-2 rounded bg-transparent text-white w-full"
              />
              <input
                type="date"
                name="to"
                value={dateRange.to}
                onChange={handleDateRangeChange}
                className="border p-2 rounded bg-transparent text-white w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-2 text-start">Sort By</h3>
            <select
              value={sortBy}
              onChange={handleSortByChange}
              className="border p-2 rounded w-full bg-transparent text-white"
            >
              <option value="publishedAt" className="bg-sky-950 text-white">
                Published At
              </option>
              <option value="relevancy" className="bg-sky-950 text-white">
                Relevancy
              </option>
              <option value="popularity" className="bg-sky-950 text-white">
                Popularity
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
