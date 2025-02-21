// import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import CardHoverIcons from "./CardHoverIcons";
// import CardLabels from "./CardLabels";

// const SingleProductCard = ({
//   name,
//   location,
//   price,
//   distance,
//   purpose,
//   number_of_beds,
//   number_of_bathrooms,
//   dimensions,
//   image,
//   basis,
// }) => {
//   return (
//     <div
//       className={`flex-1 ${
//         basis ? basis : "basis-[18rem]"
//       } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
//     >
//       <div className="group !opacity-100 overflow-hidden relative">
//         <Link to="/" className="!opacity-100">
//           <img
//             src={image}
//             alt={name}
//             className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
//           />
//         </Link>
//         <CardHoverIcons />
//         <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
//           <div className="text-white flex-align-center gap-x-2">
//             <BiMap />
//             <p>{location}</p>
//           </div>
//         </div>
//       </div>
//       <CardLabels purpose={purpose} distance={distance} />
//       <div className="p-3">
//         <Link to="/" className="group-hover:text-primary transition-a">
//           <h1 className="text-lg font-bold capitalize">{name}</h1>
//         </Link>
//         <div className="flex justify-between mt-3">
//           <div className="flex-align-center gap-x-2">
//             <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//               <BiBed />
//             </div>
//             <p className="text-sm">{number_of_beds} Beds</p>
//           </div>
//           <div className="flex-align-center gap-x-2">
//             <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//               <BiTab />
//             </div>
//             <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
//           </div>
//           <div className="flex-align-center gap-x-2">
//             <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//               <BiMapAlt />
//             </div>
//             <p className="text-sm">{dimensions}</p>
//           </div>
//         </div>

//         <div className="mt-4 flex-center-between">
//           <h1 className="text-lg font-semibold text-primary">₹{price}</h1>
//           <button className="btn btn-secondary">details</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProductCard;













// Final Code ----------------------------------------------------------------
// import { useState } from "react";
// import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
// import { AiOutlineCloseCircle } from "react-icons/ai"; // Import clear icon
// import { Link } from "react-router-dom";
// import CardHoverIcons from "./CardHoverIcons";
// import CardLabels from "./CardLabels";

// const SingleProductCard = ({
//   name,
//   location,
//   price,
//   distance,
//   purpose,
//   number_of_beds,
//   number_of_bathrooms,
//   dimensions,
//   image,
//   basis,
//   description, // Assuming a description field exists for full details
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <div
//         className={`flex-1 ${basis ? basis : "basis-[18rem]"} shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
//       >
//         <div className="group !opacity-100 overflow-hidden relative">
//           <Link to="/" className="!opacity-100">
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
//             />
//           </Link>
//           <CardHoverIcons onViewDetails={() => setIsModalOpen(true)} />
//           <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
//             <div className="text-white flex-align-center gap-x-2">
//               <BiMap />
//               <p>{location}</p>
//             </div>
//           </div>
//         </div>
//         <CardLabels purpose={purpose} distance={distance} />
//         <div className="p-3">
//           <Link to="/" className="group-hover:text-primary transition-a">
//             <h1 className="text-lg font-bold capitalize">{name}</h1>
//           </Link>
//           <div className="flex justify-between mt-3">
//             <div className="flex-align-center gap-x-2">
//               <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//                 <BiBed />
//               </div>
//               <p className="text-sm">{number_of_beds} Beds</p>
//             </div>
//             <div className="flex-align-center gap-x-2">
//               <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//                 <BiTab />
//               </div>
//               <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
//             </div>
//             <div className="flex-align-center gap-x-2">
//               <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//                 <BiMapAlt />
//               </div>
//               <p className="text-sm">{dimensions}</p>
//             </div>
//           </div>

//           <div className="mt-4 flex-center-between">
//             <h1 className="text-lg font-semibold text-primary">₹{price} Lakhs</h1>
//             <button 
//               className="btn btn-secondary"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Details
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal Popup for Property Details */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white dark:bg-card-dark p-6 rounded-lg max-w-lg w-full relative">
//           <AiOutlineCloseCircle
//                         className="absolute top-1 right-1  cursor-pointer text-gray-500 hover:text-orange-500 transition-all duration-200 text-2xl font-bold"
//                         onClick={() => setIsModalOpen(false)}
//                       />
//             {/* <button
//               className="absolute top-2 right-2 text-xl text-gray-500 hover:text-red-500"
//               onClick={() => setIsModalOpen(false)}
//             >
//               ✖
//             </button> */}
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-56 object-cover rounded-md"
//             />
//             <h1 className="text-2xl font-bold mt-4">{name}</h1>
//             <p className="text-gray-600 dark:text-gray-300">{location}</p>
//             <p className="mt-2 text-lg text-primary font-semibold">₹{price}  Lakhs</p>
//             <div className="flex justify-between mt-3">
//               <p><strong>Beds: </strong> {number_of_beds}</p>
//               <p><strong>Baths:</strong> {number_of_bathrooms}</p>
//               <p><strong>Size:</strong> {dimensions}</p>
//             </div>
//             <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{description}</p>
//             <button
//               className="btn btn-primary w-full mt-4"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Enquiry Now
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SingleProductCard;






// try 1 final ------------------------------------------------
import { useState } from "react";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";


const SingleProductCard = ({
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  basis,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", interest: "" });
  const [formError, setFormError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.interest) {
      setFormError("All fields are required.");
      return;
    }

    // Email validation (@gmail.com format)
     if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(formData.email)) {
      setFormError("Email must be in @gmail.com format.");
      return;
  } 
  else {
    setFormError('');
    console.log('Email:', formData.email);
}

    setFormError("");
    setFormSubmitted(true);
    setTimeout(() => {
      setIsInquiryOpen(false);
      setIsModalOpen(true);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <div className={`flex-1 ${basis ? basis : "basis-[18rem]"} shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}>
        <div className="group !opacity-100 overflow-hidden relative">
          <Link to="/" className="!opacity-100">
            <img
              src={image}
              alt={name}
              className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
            />
          </Link>
          <CardHoverIcons onViewDetails={() => setIsModalOpen(true)} />
          <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
            <div className="text-white flex-align-center gap-x-2">
              <BiMap />
              <p>{location}</p>
            </div>
          </div>
        </div>
        <CardLabels purpose={purpose} distance={distance} />
        <div className="p-3">
          <Link to="/" className="group-hover:text-primary transition-a">
            <h1 className="text-lg font-bold capitalize">{name}</h1>
          </Link>
          <div className="flex justify-between mt-3">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiBed />
              </div>
              <p className="text-sm">{number_of_beds} Beds</p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiTab />
              </div>
              <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiMapAlt />
              </div>
              <p className="text-sm">{dimensions}</p>
            </div>
          </div>
          <div className="mt-4 flex-center-between">
            <h1 className="text-lg font-semibold text-primary">₹{price}</h1>
            <button className="btn btn-secondary" onClick={() => setIsModalOpen(true)}>Details</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-card-dark p-6 rounded-lg max-w-lg w-full relative">
            <AiOutlineCloseCircle className="absolute top-1 right-1 cursor-pointer text-gray-500 hover:text-orange-500 transition-all duration-200 text-2xl font-bold" onClick={() => setIsModalOpen(false)} />
            <img src={image} alt={name} className="w-full h-56 object-cover rounded-md" />
            <h1 className="text-2xl font-bold mt-4">{name}</h1>
            <p className="text-gray-600 dark:text-gray-300">{location}</p>
            <p className="mt-2 text-lg text-primary font-semibold">₹{price}</p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-justify">{description}</p>
            <button className="btn btn-primary w-full mt-4" onClick={() => setIsInquiryOpen(true)}>Enquire Now</button>
          </div>
        </div>
      )}

      {isInquiryOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-card-dark p-6 rounded-lg max-w-md w-full relative">
            <AiOutlineCloseCircle className="absolute top-1 right-1 cursor-pointer text-gray-500 hover:text-orange-500 transition-all duration-200 text-2xl font-bold" onClick={() => setIsInquiryOpen(false)} />
            <h2 className="text-xl font-bold">Enquiry for {name}</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" className="w-full input"  onChange={handleChange} />

              <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="interest"
              required
              onChange={handleChange}
            />
            <label className="text-md w-full">I am interested in this property</label>
          </div>
          
              {formError && <p className="text-red-500 text-sm">{formError}</p>}
              <button type="submit" className="btn btn-primary w-full mt-4">Submit</button>
            </form>
            {formSubmitted && <p className="flex-center-center text-orange-600 text-xl mt-2">Thanks! We will reach you in a moment!</p>}
          </div>
        </div>
      )}
      
    </>
  );
};

export default SingleProductCard;



























// import { useState } from "react";
// import { BiBed, BiMap, BiMapAlt, BiTab, BiHeart, BiStar, BiShow } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import CardLabels from "./CardLabels";

// const SingleProductCard = ({
//   name,
//   location,
//   price,
//   distance,
//   purpose,
//   number_of_beds,
//   number_of_bathrooms,
//   dimensions,
//   image,
//   basis,
//   description,
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
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
//       {notification && (
//         <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md z-50 animate-fade-in-out">
//           {notification}
//         </div>
//       )}

//       <div
//         className={`flex-1 ${basis ? basis : "basis-[18rem]"} shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
//       >
//         <div className="group !opacity-100 overflow-hidden relative">
//           <Link to="/" className="!opacity-100">
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
//             />
//           </Link>

//           {/* ✅ Icons for Liking, Starring & Viewing */}
//           <div className="absolute top-3 right-3 flex gap-2">
//             <BiHeart
//               className={`cursor-pointer text-2xl ${
//                 liked ? "text-red-500" : "text-gray-400"
//               } hover:text-red-500 transition`}
//               onClick={() => {
//                 setLiked(!liked);
//                 showNotification("You liked a property");
//               }}
//             />
//             <BiStar
//               className={`cursor-pointer text-2xl ${
//                 starred ? "text-yellow-400" : "text-gray-400"
//               } hover:text-yellow-400 transition`}
//               onClick={() => {
//                 setStarred(!starred);
//                 showNotification("You starred a property");
//               }}
//             />
//             <BiShow
//               className="cursor-pointer text-2xl text-gray-400 hover:text-primary transition"
//               onClick={() => setIsModalOpen(true)}
//             />
//           </div>

//           <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
//             <div className="text-white flex-align-center gap-x-2">
//               <BiMap />
//               <p>{location}</p>
//             </div>
//           </div>
//         </div>
//         <CardLabels purpose={purpose} distance={distance} />
//         <div className="p-3">
//           <Link to="/" className="group-hover:text-primary transition-a">
//             <h1 className="text-lg font-bold capitalize">{name}</h1>
//           </Link>
//           <div className="flex justify-between mt-3">
//             <div className="flex-align-center gap-x-2">
//               <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//                 <BiBed />
//               </div>
//               <p className="text-sm">{number_of_beds} Beds</p>
//             </div>
//             <div className="flex-align-center gap-x-2">
//               <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//                 <BiTab />
//               </div>
//               <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
//             </div>
//             <div className="flex-align-center gap-x-2">
//               <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
//                 <BiMapAlt />
//               </div>
//               <p className="text-sm">{dimensions}</p>
//             </div>
//           </div>

//           <div className="mt-4 flex-center-between">
//             <h1 className="text-lg font-semibold text-primary">₹{price}</h1>
//             <button 
//               className="btn btn-secondary"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Details
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Modal Popup for Property Details */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//           <div className="bg-white dark:bg-card-dark p-6 rounded-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-3 right-3 text-xl text-gray-500 hover:text-red-500"
//               onClick={() => setIsModalOpen(false)}
//             >
//               ✖
//             </button>
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-56 object-cover rounded-md"
//             />
//             <h1 className="text-2xl font-bold mt-4">{name}</h1>
//             <p className="text-gray-600 dark:text-gray-300 flex items-center gap-x-2">
//               <BiMapAlt className="text-primary" /> {location}
//             </p>
//             <p className="mt-2 text-lg text-primary font-semibold">₹{price}</p>
//             <div className="flex justify-between mt-3">
//               <p className="flex items-center gap-x-1">
//                 <BiBed className="text-primary" /> <strong>Beds:</strong> {number_of_beds}
//               </p>
//               <p className="flex items-center gap-x-1">
//                 <BiTab className="text-primary" /> <strong>Baths:</strong> {number_of_bathrooms}
//               </p>
//               <p className="flex items-center gap-x-1">
//                 <BiMapAlt className="text-primary" /> <strong>Size:</strong> {dimensions}
//               </p>
//             </div>
//             <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{description}</p>
//             <button
//               className="btn btn-primary w-full mt-4"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SingleProductCard;






