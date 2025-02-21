// keyboard
//Final example
import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  CTA,
  HeadeFilters,
  Pagination,
  PropertyFullWidth,
  TopRated,
  SocialIcons,
  Type,
  PopularTags,
} from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { property as originalPropertyList } from "../data/dummyData"; // Import full original list
import { closeFilterMenu, uiStore } from "../features/uiSlice";

const PropertyFive = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [layout, setLayout] = useState("grid");
  const [filteredProperties, setFilteredProperties] = useState(originalPropertyList);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handleFilterChange = (filters) => {
    let filtered = [...originalPropertyList]; // Always start with full list

    // Filter by price range
    if (filters.price) {
      const [minPrice, maxPrice] = filters.price.split("-").map(Number);
      filtered = filtered.filter(
        (prop) => prop.price >= minPrice && prop.price <= maxPrice
      );
    }

    // Filter by purpose (sell/rent)
    if (filters.purpose) {
      filtered = filtered.filter(
        (prop) => prop.purpose.toLowerCase() === filters.purpose.toLowerCase()
      );
    }

    console.log("Filtered Properties:", filtered); // Debugging

    setFilteredProperties(filtered.length > 0 ? filtered : []);
    setCurrentPage(0);
  };

  // ** Keyword Filter Logic **
  const handleKeywordFilter = (propertyIds) => {
    if (!propertyIds) {
      setFilteredProperties(originalPropertyList); // Reset if input is cleared
      return;
    }

    const filtered = originalPropertyList.filter((property) =>
      propertyIds.includes(property.id)
    );

    setFilteredProperties(filtered);
    setCurrentPage(0);
  };

  // ** Sorting Logic **
  const handleSortChange = (sortOption) => {
    let sortedProperties = [...originalPropertyList]; // Always reset to full list before sorting

    if (sortOption === "latest") {
      sortedProperties = sortedProperties.slice(-5); // Get last 5 properties
    } else if (sortOption === "cheapest") {
      sortedProperties = sortedProperties.filter(
        (prop) => prop.price >= 300000 && prop.price <= 900000
      );
    } else if (sortOption === "expensive") {
      sortedProperties = sortedProperties.filter(
        (prop) => prop.price > 900000 && prop.price <= 2000000
      );
    }

    setFilteredProperties(sortedProperties);
    setCurrentPage(0);
  };

  // ** Pagination logic **
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // ** Showing X - Y of Z results logic **
  const startResult = indexOfFirstItem + 1;
  const endResult = Math.min(indexOfLastItem, filteredProperties.length);
  const totalResults = filteredProperties.length;

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <HeadeFilters
        layout={layout}
        setLayout={setLayout}
        startResult={totalResults === 0 ? 0 : startResult}
        endResult={endResult}
        totalResults={totalResults}
        onSortChange={handleSortChange} // Pass sorting function
        onKeywordFilter={handleKeywordFilter} // Pass keyword filter function
      />

      <div className="grid md:grid-cols-4 gap-x-14 mt-5">
        <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
          {layout === "grid" ? (
            <PropertyList properties={currentProperties} />
          ) : (
            <PropertyFullWidth properties={currentProperties} />
          )}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredProperties.length}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
        <div className="md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="flex-center-between border-b dark:border-dark md:hidden">
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeFilterMenu())}
                >
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch onFilterChange={handleFilterChange} />
              <Type setFilteredProperties={setFilteredProperties} />
              
              <SocialIcons />
              <PopularTags/>
              <TopRated/>
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFive;























// // PropertyFive.jsx default
// import { useState } from "react";
// import { FiDelete } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   AdvancedSearch,
//   CTA,
//   HeadeFilters,
//   Pagination,
//   PriceRange,
//   PropertyFullWidth,
//   SocialIcons,
//   Type,
// } from "../components/common/page-componets";
// import { PropertyList } from "../components/property";
// import { property } from "../data/dummyData";
// import { closeFilterMenu, uiStore } from "../features/uiSlice";

// const PropertyFive = () => {
//   const { isFilterMenuOpen } = useSelector(uiStore);
//   const dispatch = useDispatch();
//   const handleCloseFiltermenu = (e) => {
//     if (e.target.classList.contains("filter-modal"))
//       dispatch(closeFilterMenu());
//   };

//   const [layout, setLayout] = useState("grid");
//   const [filteredProperties, setFilteredProperties] = useState(property); // State for filtered properties

//   return (
//     <div className="pt-20 max-w-7xl mx-auto px-4">
//       <HeadeFilters layout={layout} setLayout={setLayout} />
//       <div className="grid md:grid-cols-4 gap-x-14 mt-5">
//         <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
//           {layout === "grid" ? (
//             <PropertyList properties={filteredProperties} />
//           ) : (
//             <PropertyFullWidth properties={filteredProperties} />
//           )} {/* Pass filtered properties */}
//           <Pagination itemsPerPage={8} pageData={filteredProperties} /> {/* Use filtered properties */}
//         </div>
//         <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
//           <div
//             className={`filter-modal ${isFilterMenuOpen && "open"}`}
//             onClick={handleCloseFiltermenu}
//           >
//             <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
//               <div className="flex-center-between border-b dark:border-dark md:hidden">
//                 <div
//                   className="icon-box md:hidden"
//                   onClick={() => dispatch(closeFilterMenu())}
//                 >
//                   <FiDelete />
//                 </div>
//                 <p className="uppercase">Filters</p>
//               </div>
//               <AdvancedSearch />
//               <Type setFilteredProperties={setFilteredProperties} />{" "}
//               {/* Pass the setter function */}
//               <PriceRange />
//               <SocialIcons />
//               <CTA />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyFive;



//Final example
// import { useState } from "react";
// import { FiDelete } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   AdvancedSearch,
//   CTA,
//   HeadeFilters,
//   Pagination,
//   PropertyFullWidth,
//   SocialIcons,
//   Type,
// } from "../components/common/page-componets";
// import { PropertyList } from "../components/property";
// import { property as originalPropertyList } from "../data/dummyData"; // Import full original list
// import { closeFilterMenu, uiStore } from "../features/uiSlice";

// const PropertyFive = () => {
//   const { isFilterMenuOpen } = useSelector(uiStore);
//   const dispatch = useDispatch();

//   const handleCloseFiltermenu = (e) => {
//     if (e.target.classList.contains("filter-modal"))
//       dispatch(closeFilterMenu());
//   };

//   const [layout, setLayout] = useState("grid");
//   const [filteredProperties, setFilteredProperties] = useState(originalPropertyList);
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 8;

//   const handleFilterChange = (filters) => {
//     let filtered = [...originalPropertyList]; // Always start with full list

//     // Filter by price range
//     if (filters.price) {
//       const [minPrice, maxPrice] = filters.price.split("-").map(Number);
//       filtered = filtered.filter(
//         (prop) => prop.price >= minPrice && prop.price <= maxPrice
//       );
//     }

//     // Filter by purpose (sell/rent)
//     if (filters.purpose) {
//       filtered = filtered.filter(
//         (prop) => prop.purpose.toLowerCase() === filters.purpose.toLowerCase()
//       );
//     }

//     console.log("Filtered Properties:", filtered); // Debugging

//     setFilteredProperties(filtered.length > 0 ? filtered : []);
//     setCurrentPage(0);
//   };

//   // ** Sorting Logic **
//   const handleSortChange = (sortOption) => {
//     let sortedProperties = [...originalPropertyList]; // Always reset to full list before sorting

//     if (sortOption === "latest") {
//       sortedProperties = sortedProperties.slice(-5); // Get last 5 properties
//     } else if (sortOption === "cheapest") {
//       sortedProperties = sortedProperties.filter(
//         (prop) => prop.price >= 300000 && prop.price <= 900000
//       );
//     } else if (sortOption === "expensive") {
//       sortedProperties = sortedProperties.filter(
//         (prop) => prop.price > 900000 && prop.price <= 2000000
//       );
//     }

//     setFilteredProperties(sortedProperties);
//     setCurrentPage(0);
//   };

//   // ** Pagination logic **
//   const indexOfLastItem = (currentPage + 1) * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProperties = filteredProperties.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   // ** Showing X - Y of Z results logic **
//   const startResult = indexOfFirstItem + 1;
//   const endResult = Math.min(indexOfLastItem, filteredProperties.length);
//   const totalResults = filteredProperties.length;

//   return (
//     <div className="pt-20 max-w-7xl mx-auto px-4">
//       <HeadeFilters
//         layout={layout}
//         setLayout={setLayout}
//         startResult={totalResults === 0 ? 0 : startResult}
//         endResult={endResult}
//         totalResults={totalResults}
//         onSortChange={handleSortChange} // Pass sorting function
//       />

//       <div className="grid md:grid-cols-4 gap-x-14 mt-5">
//         <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
//           {layout === "grid" ? (
//             <PropertyList properties={currentProperties} />
//           ) : (
//             <PropertyFullWidth properties={currentProperties} />
//           )}
//           <Pagination
//             itemsPerPage={itemsPerPage}
//             totalItems={filteredProperties.length}
//             currentPage={currentPage}
//             onPageChange={setCurrentPage}
//           />
//         </div>
//         <div className="md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
//           <div
//             className={`filter-modal ${isFilterMenuOpen && "open"}`}
//             onClick={handleCloseFiltermenu}
//           >
//             <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
//               <div className="flex-center-between border-b dark:border-dark md:hidden">
//                 <div
//                   className="icon-box md:hidden"
//                   onClick={() => dispatch(closeFilterMenu())}
//                 >
//                   <FiDelete />
//                 </div>
//                 <p className="uppercase">Filters</p>
//               </div>
//               <AdvancedSearch onFilterChange={handleFilterChange} />
//               <Type setFilteredProperties={setFilteredProperties} />
//               <SocialIcons />
//               <CTA />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyFive;









































































