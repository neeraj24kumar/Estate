import { FiArrowRight } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { useState } from "react";

const SingleFeedCard = ({ id, title, date_posted, image, category, author, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group mb-6">
      <div className="group !opacity-100 overflow-hidden">
        <button onClick={handleOpenModal} className="!opacity-100 w-full">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg h-fit md:h-[200px] object-cover group-hover:scale-125 transition-a"
          />
        </button>
      </div>
      <div className="absolute top-2 left-2">
        <span className="px-3 py-1 text-white capitalize rounded-full bg-secondary">
          {category}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm uppercase opacity-60">
          by {author?.name}: {date_posted}
        </p>
        <button onClick={handleOpenModal} className="group-hover:text-primary transition-a text-left w-full">
          <h1 className="text-lg font-semibold capitalize">{title}</h1>
        </button>
        <button onClick={handleOpenModal} className="mt-4 flex-align-center gap-x-2 hover:underline text-primary">
          <span className="uppercase hover:underline">read more</span>
          <FiArrowRight />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleCloseModal}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm opacity-60">by {author?.name} - {date_posted}</p>
            <img src={image} alt={title} className="w-full h-[20vh] rounded-lg mt-4 object-cover" />
            <div className="mt-4 flex-1 overflow-y-auto max-h-[60vh] p-2 border-t">
              <p className="text-justify">{description}</p>
            </div>
            <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFeedCard;

















































// import { FiArrowRight } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const SingleFeedCard = ({
//   id,
//   title,
//   date_posted,
//   image,
//   category,
//   author,
// }) => {
//   return (
//     <div className="flex-1 basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group">
//       <div className="group !opacity-100 overflow-hidden">
//         <Link to={`/bolg/${id}`} className="!opacity-100">
//           <img
//             src={image}
//             alt={title}
//             className="w-full rounded-lg h-fit md:h-[200px] object-cover group-hover:scale-125 transition-a"
//           />
//         </Link>
//       </div>
//       <div className="absolute top-2 left-2">
//         <span className="px-3 py-1 text-white capitalize rounded-full bg-secondary">
//           {category}
//         </span>
//       </div>
//       <div className="p-3">
//         <p className="text-sm uppercase opacity-60">
//           by {author?.name}: {date_posted}
//         </p>
//         <Link
//           to={`/bolg/${id}`}
//           className="group-hover:text-primary transition-a"
//         >
//           <h1 className="text-lg font-semibold capitalize">{title}</h1>
//         </Link>
//         <Link className="mt-4 flex-align-center gap-x-2 hover:underline text-primary">
//           <span className="uppercase hover:underline">read more</span>{" "}
//           <FiArrowRight />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SingleFeedCard;















