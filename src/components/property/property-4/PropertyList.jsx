import { useSelector } from "react-redux";
import { dataStore } from "../../../features/dataSlice";
import SingleProductCard from "../../common/page-componets/SingleProductCard";

const PropertyList = ({ basis, properties = [] }) => {
  const { currentDataItems } = useSelector(dataStore);

  // Use properties if passed, otherwise fallback to currentDataItems from Redux store
  const propertyList = properties.length > 0 ? properties : currentDataItems;

  console.log("Properties received by PropertyList:", propertyList);

  return (
    <div className="flex flex-wrap gap-4">
      {propertyList.length === 0 ? (
        <p>No properties found</p>
      ) : (
        propertyList.map((property) => (
          <SingleProductCard key={property.id} {...property} basis={basis} />
        ))
      )}
    </div>
  );
};

export default PropertyList;




























































// import { useSelector } from "react-redux";
// import { dataStore } from "../../../features/dataSlice";
// import SingleProductCard from "../../common/page-componets/SingleProductCard";

// const PropertyList = ({ basis }) => {
//   const { currentDataItems } = useSelector(dataStore);
//   return (
//     <div className="flex flex-wrap gap-4">
//       {currentDataItems?.map((property) => (
//         <SingleProductCard key={property.id} {...property} basis={basis} />
//       ))}
//     </div>
//   );
  
  
// };
// const PropertyList = ({ properties }) => {
//   console.log("Properties received by PropertyList:", properties);

//   return (
//     <div>
//       {properties.length === 0 ? (
//         <p>No properties found</p>
//       ) : (
//         properties.map((property) => <p key={property.id}>{property.title}</p>)
//       )}
//     </div>
//   );
// };


// export default PropertyList;
























// // PropertyList.jsx
// import React from "react";
// import { useSelector } from "react-redux";
// import { dataStore } from "../../../features/dataSlice";
// import SingleProductCard from "../../common/page-componets/SingleProductCard";

// const PropertyList = ({ basis, properties }) => {
//   // Use properties prop if available, otherwise use data from Redux store
//   const { currentDataItems } = useSelector(dataStore);
//   const dataToUse = properties || currentDataItems;

//   return (
//     <div className="flex flex-wrap gap-4">
//       {dataToUse?.map((property) => (
//         <SingleProductCard key={property.id} {...property} basis={basis} />
//       ))}
//     </div>
//   );
// };

// export default PropertyList;

