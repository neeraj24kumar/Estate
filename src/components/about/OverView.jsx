// import { BiPlay } from "react-icons/bi";

// const OverView = () => {
//   return (
//     <div className="pt-20 pb-16">
//       <div className="flex flex-wrap gap-4">
//         <div className="flex-1 basis-[18rem]">
//           <h1 className="heading">what we do</h1>
//           <p className="mt-3">
//           At MartVilla, we believe your home should be a reflection of your unique style and a sanctuary of comfort. We go beyond simply decorating; we transform your living spaces into environments that inspire, rejuvenate, and perfectly suit your lifestyle. From subtle enhancements to complete makeovers, we're dedicated to creating a home you'll truly love.
//           </p>
//           <button className="mt-4 btn btn-primary">read more</button>
//         </div>
//         <div className="flex-1 basis-[18rem]">
//           <div className="relative overflow-hidden rounded-lg">
//             <img
//               src="/images/property (41).png"
//               alt=""
//               className="w-full h-[300px] object-cover"
//             />
//             <div className="absolute top-0 left-0 flex-col w-full h-full bg-black/50 flex-center-center">
//               <div className="icon-box !text-primary !bg-transparent border !border-primary relative before:absolute before:w-full before:h-full before:rounded-full before:animate-ping before:bg-primary/60">
//                 <BiPlay className="text-2xl" />
//               </div>
//               <h1 className="mt-3 text-3xl font-semibold text-white capitalize">
//                 watch the overview
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverView;



import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const OverView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const openModal = () => setIsOpen(true);
  const open1Modal = () => setIsOpen1(true);
  const closeModal = () => setIsOpen(false);
  const close1Modal = () => setIsOpen1(false);

  return (
    <div className="pt-20 pb-16">
      <div className="flex flex-wrap gap-4">
        {/* Left Section */}
        <div className="flex-1 basis-[18rem]">
          <h1 className="heading">what we do</h1>
          <p className="mt-3 ">
            At MartVilla, we believe your home should be a reflection of your unique style and a
            sanctuary of comfort. We go beyond simply decorating; we transform your living spaces
            into environments that inspire, rejuvenate, and perfectly suit your lifestyle. From
            subtle enhancements to complete makeovers, we're dedicated to creating a home you'll
            truly love.
          </p>
          <button className="mt-4 btn btn-primary" onClick={open1Modal}>Know More</button>
        </div>

        {/* Right Section (Video Thumbnail) */}
        <div className="flex-1 basis-[18rem]">
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/property (41).png" alt="" className="w-full h-[300px] object-cover" />
            <div className="absolute top-0 left-0 flex-col w-full h-full bg-black/50 flex-center-center">
              <div
                className="icon-box !text-primary !bg-transparent border !border-primary relative before:absolute before:w-full before:h-full before:rounded-full before:animate-ping before:bg-primary/60 cursor-pointer"
                onClick={openModal}
              >
                <BiPlay className="text-2xl" />
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-white capitalize">
                watch the overview
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeModal}>
            <FaTimes />
          </button>
          <div className="relative w-full max-w-3xl p-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/Vy_WolEsO00?si=Oeu9aupZzZ9VLBbL&autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
      {/* Video Modal */}
      {isOpen1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={close1Modal}>
            <FaTimes />
          </button>
          <div className="relative w-full max-w-3xl p-4">
          <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/z6vGxQKAYkE?autoplay=1"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  className="rounded-lg"
/>

          </div>
        </div>
      )}
    </div>
  );
};

export default OverView;


