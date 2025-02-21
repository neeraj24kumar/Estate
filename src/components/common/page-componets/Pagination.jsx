/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import ReactPaginate from "react-paginate";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  // if (pageCount <= 1) return null; // Hide pagination if only one page

  const handlePageClick = (event) => {
    onPageChange(event.selected);
  };

  return (
    <div className="flex justify-center mt-4">
      <ReactPaginate
        previousLabel={<FiChevronsLeft />}
        nextLabel={<FiChevronsRight />}
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        forcePage={currentPage} // Keep page state consistent
        containerClassName="wb-pagination"
        pageClassName="pagination-item"
        pageLinkClassName="pagination-link"
        activeClassName="pagination-link-active"
        previousLinkClassName="prev"
        nextLinkClassName="next"
        disabledClassName="disabled"
      />
    </div>
  );
};

export default Pagination;






































































































// import { useEffect, useState } from "react";
// import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
// import ReactPaginate from "react-paginate";
// import { useDispatch } from "react-redux";
// import { getCurrentItems } from "../../../features/dataSlice";

// const Pagination = ({ itemsPerPage, pageData }) => {
//   const [offset, setOffset] = useState(0);
//   const dispatch = useDispatch();

//   const endOffset = offset + itemsPerPage;
//   const currentItems = pageData.slice(offset, endOffset);
//   const pageCount = Math.ceil(pageData.length / itemsPerPage);

//   useEffect(() => {
//     dispatch(getCurrentItems(currentItems));
//   }, [currentItems]);

//   const handlePageClick = (e) => {
//     const newOffset = (e.selected * itemsPerPage) % pageData.length;
//     setOffset(newOffset);
//   };

//   return (
//     <ReactPaginate
//       breakLabel="..."
//       nextLabel={<FiChevronsRight />}
//       onPageChange={handlePageClick}
//       pageRangeDisplayed={2}
//       pageCount={pageCount}
//       previousLabel={<FiChevronsLeft />}
//       renderOnZeroPageCount={null}
//       containerClassName="wb-pagination"
//       pageClassName="pagination-item"
//       pageLinkClassName="pagination-link"
//       activeClassName="pagination-link-active"
//       previousLinkClassName="prev"
//       nextLinkClassName="next"
//       disabledClassName="disabled"
//     />
//   );
// };

// export default Pagination;










// import ReactPaginate from "react-paginate";
// import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

// const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
//   const pageCount = Math.ceil(totalItems / itemsPerPage);

//   // if (pageCount <= 1) return null; // Hide pagination if only one page

//   const handlePageClick = (event) => {
//     onPageChange(event.selected);
//   };

//   return (
//     <div className="flex justify-center mt-4">
//       <ReactPaginate
//         previousLabel={<FiChevronsLeft />}
//         nextLabel={<FiChevronsRight />}
//         breakLabel="..."
//         pageCount={pageCount}
//         marginPagesDisplayed={1}
//         pageRangeDisplayed={2}
//         onPageChange={handlePageClick}
//         forcePage={currentPage} // Keep page state consistent
//         containerClassName="wb-pagination"
//         pageClassName="pagination-item"
//         pageLinkClassName="pagination-link"
//         activeClassName="pagination-link-active"
//         previousLinkClassName="prev"
//         nextLinkClassName="next"
//         disabledClassName="disabled"
//       />
//     </div>
//   );
// };

// export default Pagination;










