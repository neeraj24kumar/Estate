
//---------------------------------------------------------------- Keywords
import React, { useState } from "react";
import { FiFilter, FiGrid } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openFilterMenu } from "../../../../features/uiSlice";

const propertyTypeMap = {
  "apartment": [10, 20, 25],
  "house": [2, 6, 12],
  "industrial": [3],
  "office villa": [4],
  "luxury home": [9, 14, 15],
  "land": [8],
  "rental": [3, 5, 7],
  "studio": [19, 23],
};

const HeadeFilters = ({ 
  layout, 
  setLayout, 
  startResult, 
  endResult, 
  totalResults, 
  onSortChange, 
  onKeywordFilter 
}) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    const input = e.target.value.toLowerCase();
    setKeyword(input);

    if (input === "") {
      onKeywordFilter(null); // Reset if input is cleared
      return;
    }

    if (propertyTypeMap[input]) {
      onKeywordFilter(propertyTypeMap[input]); // Filter by property type
    }
  };

  return (
    <div className="flex-col gap-4 flex-center-between md:flex-row">
      <div className="w-full flex-center-between">
        <div className="gap-2 flex-align-center">
          <button
            className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 hover:bg-slate-200 sm:cursor-pointer transition-a dark:bg-card-dark ${
              layout === "grid" ? "!bg-primary text-white" : ""
            }`}
            onClick={() => setLayout("grid")}
          >
            <FiGrid />
          </button>

          <button
            className="grid w-10 h-10 md:hidden rounded-xl place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark"
            onClick={() => dispatch(openFilterMenu())}
          >
            <FiFilter />
          </button>
        </div>

        {/* Dynamic results count */}
        <p className="text-gray-600 dark:text-white text-sm mt-2">
          Showing {totalResults === 0 ? 0 : startResult} - {endResult} of {totalResults} results
        </p>
      </div>

      <div className="w-full gap-4 flex-center-between">
        <select
          className="w-full px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark"
          onChange={(e) => onSortChange(e.target.value)} 
        >
          <option value="">Sort by</option>
          <option value="latest">Latest</option>
          <option value="cheapest">Cheapest</option>
          <option value="expensive">Expensive</option>
        </select>
        <input
          type="text"
          className="border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-full"
          placeholder="Enter Keyword (e.g. Apartment, Office, Rental)..."
          value={keyword}
          onChange={handleKeywordChange}
        />
      </div>
    </div>
  );
};

export default HeadeFilters;










// Default ----------------------------------------------------------------
// import React from "react";
// import { FaList } from "react-icons/fa";
// import { FiFilter, FiGrid } from "react-icons/fi";
// import { useDispatch } from "react-redux";
// import { openFilterMenu } from "../../../../features/uiSlice";

// const HeadeFilters = ({ layout, setLayout }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="flex-col gap-4 flex-center-between md:flex-row">
//       <div className="w-full flex-center-between">
//         <div className="gap-2 flex-align-center">
//           <div
//             className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 hover:bg-slate-200 sm:cursor-pointer transition-a dark:bg-card-dark  ${
//               layout === "grid" && "!bg-primary text-white"
//             }`}
//             onClick={() => setLayout("grid")}
//           >
//             <FiGrid />
//           </div>
//           <div
//             className={`w-10 h-10 rounded-xl grid place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark ${
//               layout === "list" && "!bg-primary text-white"
//             }`}
//             onClick={() => setLayout("list")}
//           >
//             <FaList />
//           </div>
//           <div
//             className="grid w-10 h-10 md:hidden rounded-xl place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark"
//             onClick={() => dispatch(openFilterMenu())}
//           >
//             <FiFilter />
//           </div>
//         </div>
//         <p>Showing 01 - 04 of 25 results</p>
//       </div>
//       <div className="w-full gap-4 flex-center-between">
//         <select
//           name=""
//           id=""
//           className="w-full px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark"
//         >
//           <option value="">Sorty by</option>
//           <option value="latest">Latest</option>
//           <option value="cheapest">Cheapest</option>
//           <option value="expensive">Expensive</option>
//         </select>
//         <input
//           type="text"
//           className="border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-full"
//           placeholder="Enter Keywords.."
//         />
//       </div>
//     </div>
//   );
// };

// export default HeadeFilters;
































