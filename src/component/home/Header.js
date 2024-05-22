import React, { useState } from "react";
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import FilterModal from "../modal/FilterModal";
import { useNavigate } from "react-router-dom";

const Header = ({ setQuery, setFilters }) => {
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setQuery(searchInput);
      setSearchInput("");
      setSearch(false);
    }
  };

  const handleRefresh = () => {
    setQuery("");
    navigate("/");
  };

  return (
    <div className="p-4 bg-sky-950 flex justify-between items-center">
      <button
        className={`text-white text-3xl font-bold ${
          search ? "hidden sm:block" : "block"
        }`}
        onClick={handleRefresh}
      >
        Daily News
      </button>

      {/* Search Bar */}
      <div
        className={`flex-grow sm:mx-4 ${
          search ? "flex" : "hidden sm:flex"
        } items-center relative`}
      >
        <input
          type="text"
          placeholder="Search Daily News"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded w-full"
        />

        <FaTimes
          size={24}
          className="cursor-pointer absolute right-2 top-2 sm:hidden"
          onClick={() => setSearch(false)}
        />
      </div>

      {/* Filter Icon */}
      <div className={`flex ${search ? "block sm:hidden" : "hidden sm:block"}`}>
        <FaFilter
          size={24}
          onClick={() => setModal(true)}
          className={`cursor-pointer text-white ${
            search ? "hidden sm:block" : "block"
          }`}
        />
      </div>

      {/* Search and Filter Icons */}
      <div
        className={`flex items-center ${
          search ? "hidden sm:flex" : "block sm:hidden"
        }`}
      >
        <FaSearch
          size={24}
          className="cursor-pointer text-white"
          onClick={() => setSearch(true)}
        />
        <FaFilter
          size={24}
          onClick={() => setModal(true)}
          className="cursor-pointer text-white ml-4"
        />
      </div>

      <FilterModal
        show={modal}
        onClose={() => setModal(false)}
        setFilters={setFilters}
      />
    </div>
  );
};

export default Header;
