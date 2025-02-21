// import { Link } from "react-router-dom";
// import { projects } from "../../../data/dummyData";

// const Projects = () => {
//   return (
//     <div className="pt-10 pb-16">
//       <div className="text-center">
//         <h1 className="mx-auto sub-heading">our projects</h1>
//         <h1 className="heading">excellent projects both small and complex</h1>
//       </div>
//       <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3">
//         {projects.map(({ id, name, number, image }) => (
//           <div key={id} className="relative w-full group">
//             <div className="overflow-hidden">
//               <Link className="!opacity-100">
//                 <img
//                   src={image}
//                   alt={name}
//                   className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
//                 />
//               </Link>
//             </div>
//             <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
//               <h1 className="text-lg font-semibold">{name}</h1>
//               <p>{number} Poperty</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;





import { useState } from "react";
import { projects } from "../../../data/dummyData";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">our projects</h1>
        <h1 className="heading">excellent projects both small and complex</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(({ id, name, number, image }, index) => (
          <div key={id} className="relative w-full group">
            <div className="overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a cursor-pointer"
                onClick={() => openModal(index)}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
              <h1 className="text-lg font-semibold">{name}</h1>
              <p>{number} Property</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeModal}>
            <FaTimes />
          </button>

          <button className="absolute left-5 text-white text-3xl" onClick={prevImage}>
            <FaArrowLeft />
          </button>

          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].name}
            className="max-w-full max-h-[80vh] object-contain"
          />

          <button className="absolute right-5 text-white text-3xl" onClick={nextImage}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;


