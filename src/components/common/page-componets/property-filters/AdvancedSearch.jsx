import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"; // Import clear icon

const AdvancedSearch = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: "",
    purpose: "",
  });

  const [showClear, setShowClear] = useState(false); // Track clear icon visibility

  // Handle change in dropdowns
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Handle search button click
  const handleSearch = () => {
    onFilterChange(filters);
    setShowClear(true); // Show clear icon only after searching
  };

  // Handle reset filters
  const handleClearFilters = () => {
    setFilters({ price: "", purpose: "" });
    onFilterChange({ price: "", purpose: "" });
    setShowClear(false); // Hide clear icon when reset
  };

  return (
    <div className="p-3 border dark:border-dark relative">
      {/* Header with Conditional Clear Icon */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">Advanced Search</h1>
        
        {/* Show clear icon only after clicking search */}
        {showClear && (
          <AiOutlineCloseCircle
            className="cursor-pointer text-gray-500 hover:text-red-500 transition-all duration-200 text-xl"
            onClick={handleClearFilters}
          />
        )}
      </div>

      <div className="mt-3">
        <select name="price" className="filter" onChange={handleChange} value={filters.price}>
          <option value="">Price Range</option>
          <option value="300000-600000">₹3 Lakhs - ₹6 Lakhs</option>
          <option value="600000-1000000">₹6 Lakhs - ₹10 Lakhs</option>
          <option value="1000000-2000000">₹10 Lakhs - ₹20 Lakhs</option>
        </select>
      </div>

      <div className="mt-3">
        <select name="purpose" className="filter" onChange={handleChange} value={filters.purpose}>
          <option value="">Purpose</option>
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>
      </div>

      <button
        className="btn bg-secondary w-full mt-4 text-slate-200 !rounded-none"
        onClick={handleSearch}
      >
        Search Property
      </button>
    </div>
  );
};

export default AdvancedSearch;



















