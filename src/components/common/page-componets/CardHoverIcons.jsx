// import { BiHeart, BiStar } from "react-icons/bi";
// import { FiEye } from "react-icons/fi";

// const CardHoverIcons = () => {
//   return (
//     <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:block gap-x-3">
//       <div className="text-white flex-align-center gap-x-2">
//         <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
//           <BiHeart />
//         </div>
//         <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
//           <FiEye />
//         </div>
//         <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
//           <BiStar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardHoverIcons;


// import { useState } from "react";
// import { BiHeart, BiStar } from "react-icons/bi";
// import { FiEye } from "react-icons/fi";

// const CardHoverIcons = ({ onViewDetails }) => {
//   const [liked, setLiked] = useState(false);
//   const [starred, setStarred] = useState(false);
//   const [notification, setNotification] = useState("");

//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => setNotification(""), 2000);
//   };

//   return (
//     <>
//       {/* Floating Notification */}
//       {/* {notification && (
//         <div className="fixed top-13 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md z-50 animate-fade-in-out">
//           {notification}
//         </div>
//       )} */}
//       {/* Floating Notification */}
// {notification && (
//   <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md z-50 animate-fade-in-out">
//     {notification}
//   </div>
// )}


//       <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:flex gap-x-3">
//         <div className="text-white flex-align-center gap-x-2">
//           {/* ❤️ Like (Heart) Icon */}
//           <div
//             className={`icon-box !w-7 !h-7 ${
//               liked ? "bg-red-500" : "bg-primary"
//             } hover:bg-secondary !opacity-100 cursor-pointer`}
//             onClick={() => {
//               setLiked(!liked);
//               showNotification("You liked a property!");
//             }}
//           >
//             <BiHeart />
//           </div>

//           {/* 👁 View (Eye) Icon */}
//           <div
//             className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100 cursor-pointer"
//             onClick={onViewDetails}
//           >
//             <FiEye />
//           </div>

//           {/* ⭐ Star (Favorite) Icon */}
//           <div
//             className={`icon-box !w-7 !h-7 ${
//               starred ? "bg-yellow-400" : "bg-primary"
//             } hover:bg-secondary !opacity-100 cursor-pointer`}
//             onClick={() => {
//               setStarred(!starred);
//               showNotification("You starred a property!");
//             }}
//           >
//             <BiStar />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardHoverIcons;



// import { useState } from "react";
// import { BiHeart, BiStar } from "react-icons/bi";
// import { FiEye } from "react-icons/fi";

// const CardHoverIcons = ({ onViewDetails }) => {
//   const [liked, setLiked] = useState(false);
//   const [starred, setStarred] = useState(false);
//   const [notification, setNotification] = useState("");

//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => setNotification(""), 2000);
//   };

//   return (
//     <>
    
//       {notification && (
//   <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md z-50 animate-fade-in-out 
//     dark:bg-white dark:text-orange-600 
//     sm:top-20 md:top-24 lg:top-16 max-w-xs whitespace-nowrap overflow-hidden text-ellipsis">
//     {notification}
//   </div>
// )}


//       <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:flex gap-x-3">
//         <div className="text-white flex-align-center gap-x-2">
//           {/* ❤️ Like (Heart) Icon */}
//           <div
//             className={`icon-box !w-7 !h-7 ${liked ? "bg-red-600" : "bg-primary"} hover:bg-secondary !opacity-100 cursor-pointer`}
//             onClick={() => {
//               setLiked(!liked);
//               showNotification("You liked a property!");
//             }}
//           >
//             <BiHeart />
//           </div>

//           {/* 👁 View (Eye) Icon */}
//           <div
//             className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100 cursor-pointer"
//             onClick={onViewDetails}
//           >
//             <FiEye />
//           </div>

//           {/* ⭐ Star (Favorite) Icon */}
//           <div
//             className={`icon-box !w-7 !h-7 ${starred ? "bg-yellow-400" : "bg-primary"} hover:bg-secondary !opacity-100 cursor-pointer`}
//             onClick={() => {
//               setStarred(!starred);
//               showNotification("You starred a property!");
//             }}
//           >
//             <BiStar />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardHoverIcons;






import { useState } from "react";
import { BiHeart, BiStar } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

const CardHoverIcons = ({ onViewDetails }) => {
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 2000);
  };

  return (
    <>
      {/* Floating Notification */}
      {notification && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md z-50 animate-fade-in-out 
          dark:bg-white dark:text-orange-600 
          sm:top-20 md:top-24 lg:top-16 max-w-xs whitespace-nowrap overflow-hidden text-ellipsis">
          {notification}
        </div>
      )}

      <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:flex gap-x-3">
        <div className="text-white flex-align-center gap-x-2">
          {/* ❤️ Like (Heart) Icon */}
          <div
            className={`icon-box !w-7 !h-7 ${liked ? "bg-red-600" : "bg-primary"} hover:bg-secondary !opacity-100 cursor-pointer`}
            onClick={() => {
              setLiked(!liked);
              showNotification(liked ? "Removed from Liked Property" : "You liked a property!");
            }}
          >
            <BiHeart />
          </div>

          {/* 👁 View (Eye) Icon */}
          <div
            className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100 cursor-pointer"
            onClick={onViewDetails}
          >
            <FiEye />
          </div>

          {/* ⭐ Star (Favorite) Icon */}
          <div
            className={`icon-box !w-7 !h-7 ${starred ? "bg-yellow-400" : "bg-primary"} hover:bg-secondary !opacity-100 cursor-pointer`}
            onClick={() => {
              setStarred(!starred);
              showNotification(starred ? "Removed from Starred Property" : "You starred a property!");
            }}
          >
            <BiStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHoverIcons;
