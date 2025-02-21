// import { socials } from "../../../data/dummyData";

// const SocialIcons = () => {
//   return (
//     <div className="p-3 mt-8 border dark:border-dark">
//       <h1 className="font-semibold">Sociall Media</h1>
//       <div className="flex-wrap gap-2 mt-3 flex-align-center">
//         {socials.map((icon, i) => (
//           <div
//             key={i}
//             className="icon-box bg-slate-100 dark:bg-dark-light hover:!bg-primary hover:text-white"
//           >
//             {icon}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SocialIcons;



import { socials } from "../../../data/dummyData";

const SocialIcons = () => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Social Media</h1>
      <div className="flex flex-wrap gap-2 mt-3">
        {socials.map(({ icon, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-box bg-slate-100 dark:bg-dark-light hover:!bg-primary hover:text-white flex justify-center items-center text-xl p-2 rounded-md"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;

