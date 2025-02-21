
import React from 'react';
import CountUp from 'react-countup';
import '../../common/NewsLetter.css'; // Import the CSS file

const Hero = () => {
  return (
    <div
      className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[20rem]">
        <h1 id="hemru" className="text-4xl font-bold capitalize md:text-5xl">
          property consisting <br /> land and buildings
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p>
            Your real estate journey, simplified and successful with modern technology. We provide a seamless, satisfying experience with a personal touch.
          </p>
        </div>
       
        <a href="property-5">
          <button className="mt-6 btn btn-primary">Get Started</button>
        </a>

        <div className="mt-6 text-center flex-align-center gap-x-6">
          <div>
            <h1 className="text-2xl font-bold">
              <CountUp start={0} end={12000} duration={4} separator="," /> 
              <span style={{ marginLeft: '5px' }} className="text-sm text-primary">+</span>
            </h1>
            <p>Requested Projects</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              <CountUp start={0} end={15000} duration={4} separator="," /> 
              <span style={{ marginLeft: '5px' }} className="text-sm text-primary">+</span>
            </h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              <CountUp start={0} end={100} duration={4} separator="," /> 
              <span style={{ marginLeft: '5px' }} className="text-sm text-primary">+</span>
            </h1>
            <p>Served Clients</p>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[26rem]">
        <img src="/images/hero-8.jpg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;


















// const Hero = () => {
//   return (
//     <div
//       className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
//       style={{
//         background: "url('/images/hero-bg-pattern.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//       }}
//     >
//       <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
//       <div className="flex-1 basis-[20rem]">
//         <h1 className="text-4xl font-bold capitalize md:text-5xl">
//           property consisting <br /> land and buildings
//         </h1>
//         <div className="pl-3 mt-5 border-l-4 border-primary">
//           <p>
//           Your real estate journey, simplified and successful with modern technology. We provide a seamless, satisfying experience with a personal touch.
            
//           </p>
//         </div>
       
// <a href="property-5">
//   <button className="mt-6 btn btn-primary">Get Started</button>
// </a>

//         {/* <button className="mt-6 btn btn-primary">get started</button> */}
//         <div className="mt-6 text-center flex-align-center gap-x-6">
//           <div>
//             <h1 className="text-2xl font-bold">
//               12k <span className="text-sm text-primary">+</span>
//             </h1>
//             <p>Requested Projects</p>
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold">
//               15k <span className="text-sm text-primary">+</span>
//             </h1>
//             <p>Projects Completed</p>
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold">
//               100 <span className="text-sm text-primary">+</span>
//             </h1>
//             <p>Served Clients</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 basis-[26rem]">
//         <img src="/images/hero-8.jpg" alt="" className="w-full" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
