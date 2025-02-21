// import { FiArrowRight } from "react-icons/fi";

// const NewsLetter = () => {
//   return (
//     <div className="flex flex-wrap -mt-24 bg-primary h-fit sm:h-[250px] rounded-xl py-4 text-slate-100 max-w-7xl mx-auto px-4">
//       <div className="flex-1 basis-[20rem]">
//         <img
//           src="/images/3d-house-6a.png"
//           alt=""
//           className="w-[300px] lg:w-[450px] -mt-20"
//         />
//       </div>
//       <div className="flex-1 basis-[16rem] md:basis-[30rem] mt-3 sm:mt-10">
//         <div className="text-center sm:text-left">
//           <h1 className="text-2xl font-bold capitalize">
//             subscribe to our newsletter
//           </h1>
//           <p>
//             Get the latest updates on the latest listed properties on Martvilla deals!
//           </p>
//         </div>
//         <div className="mt-3">
//           <div className="justify-center flex-align-center gap-x-2 sm:justify-start">
//             <input
//               type="text"
//               className="px-4 py-1 border-none rounded-md outline-none"
//               placeholder="Email address..."
//             />
//             <button className="p-2 rounded-md btn-secondary">
//               <FiArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsLetter;

// import React, { useState } from "react";
// import { FiArrowRight } from "react-icons/fi";

// const NewsLetter = () => {
//     const [email, setEmail] = useState("");
//     const [isValid, setIsValid] = useState(true);
//     const [message, setMessage] = useState("");

//     const validateEmail = (email) => {
//         // Basic email validation regex for @gmail.com
//         const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//         return regex.test(email);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setMessage(""); // Clear previous messages
//         setIsValid(true);

//         if (!validateEmail(email)) {
//             setIsValid(false);
//             setMessage("Please enter a valid Gmail address.");
//             return;
//         }

//         // Simulate a successful subscription (you can replace this with actual API call)
//         setMessage("Thank you for subscribing to our newsletter!");
//         setEmail(""); // Clear the input field
//     };

//     return (
//         <div className="flex flex-wrap -mt-24 bg-primary h-fit sm:h-[250px] rounded-xl py-4 text-slate-100 max-w-7xl mx-auto px-4">
//             <div className="flex-1 basis-[20rem]">
//                 <img
//                     src="/images/3d-house-6a.png"
//                     alt=""
//                     className="w-[300px] lg:w-[450px] -mt-20"
//                 />
//             </div>
//             <div className="flex-1 basis-[16rem] md:basis-[30rem] mt-3 sm:mt-10">
//                 <div className="text-center sm:text-left">
//                     <h1 className="text-2xl font-bold capitalize">
//                         subscribe to our newsletter
//                     </h1>
//                     <p>
//                         Get the latest updates on the latest listed properties on Martvilla deals!
//                     </p>
//                 </div>
//                 <form onSubmit={handleSubmit} className="mt-3">
//                     <div className="justify-center flex-align-center gap-x-2 sm:justify-start">
//                         <input
//                             type="text"
//                             className={`px-4 py-1 border-none rounded-md outline-none text-gray-800 ${!isValid ? 'border-2 border-red-500' : ''}`}
//                             placeholder="Email address..."
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                         <button type="submit" className="p-2 rounded-md btn-secondary">
//                             <FiArrowRight />
//                         </button>
//                     </div>
//                     {!isValid && <p className="text-red-400 text-sm mt-1">{message}</p>}
//                     {isValid && message && <p className="text-green-400 text-sm mt-1">{message}</p>}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default NewsLetter;

import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import './NewsLetter.css'; // Import the CSS file

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(null); // Can be 'success' or 'error'

    const validateEmail = (email) => {
        // Basic email validation regex for @gmail.com
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(null); // Clear previous message
        setIsValid(true);

        if (!validateEmail(email)) {
            setIsValid(false);
            setMessage("Please enter a valid address.");
            setShowMessage('error');
            return;
        }

        // Simulate a successful subscription
        setMessage("Thank you for subscribing");
        setEmail(""); // Clear the input field
        setShowMessage('success');
        console.log("Email submitted:", email); // Log the email to the console
    };

    useEffect(() => {
        let timer; // Declare timer outside the if block

        if (showMessage) {
            timer = setTimeout(() => {
                setShowMessage(null);
            }, 3000); // 3 seconds
        }

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, [showMessage]);

    return (
        <div className="flex flex-wrap -mt-24 bg-primary h-fit sm:h-[250px] rounded-xl py-4 text-slate-100 max-w-7xl mx-auto px-4">
            {showMessage === 'error' && (
                <div className="floating-message error">
                    {message}
                </div>
            )}

            {showMessage === 'success' && (
                <div className="floating-message success">
                    {message}
                </div>
            )}
            <div className="flex-1 basis-[20rem]">
                <img
                    src="/images/3d-house-6a.png"
                    alt=""
                    className="w-[300px] lg:w-[450px] -mt-20"
                />
            </div>
            <div className="flex-1 basis-[16rem] md:basis-[30rem] mt-3 sm:mt-10">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold capitalize">
                        subscribe to our newsletter
                    </h1>
                    <p>
                        Get the latest updates on the latest listed properties on Martvilla deals!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-3 relative"> {/* Added position relative */}
                    <div className="justify-center flex-align-center gap-x-2 sm:justify-start">
                        <input
                            type="email"
                            className={`px-4 py-1 border-none rounded-md outline-none text-gray-800 ${!isValid ? 'border-2 border-red-500' : ''}`}
                            placeholder="Email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="p-2 rounded-md btn-secondary">
                            <FiArrowRight />
                        </button>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default NewsLetter;



