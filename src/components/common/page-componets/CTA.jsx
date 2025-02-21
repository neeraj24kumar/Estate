import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="relative mt-8 h-[300px]">
      <img src="/images/property (14).jpg" alt="Luxury house exterior" className="w-full h-full" />
      <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-6 bg-black/50">
        <h1 className="heading !text-slate-100">Find Your Dream House</h1>
        <h1 className="text-slate-100">Starting from ₹30,00,000</h1>
        <Link to="/contact">
          <button className="mt-3 btn btn-primary">Contact Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
















































// import {Contact} from "./pages/Contact.jsx";
// import { Link } from "react-router-dom";
// const CTA = () => {
//   return (
//     <div className="relative mt-8 h-[300px]">
//       <img src="/images/property (14).jpg" alt="" className="w-full h-full" />
//       <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-6 bg-black/50">
//         <h1 className="heading !text-slate-100">find your dream house</h1>
//         <h1 className="text-slate-100">starting from ₹300,000 lakhs</h1>
//         <Link to="/Contact" className="!opacity-100">
//         <button className="mt-3 btn btn-primary">contact now</button>
//           </Link>
        
//       </div>
//     </div>
//   );
// };

// export default CTA;



