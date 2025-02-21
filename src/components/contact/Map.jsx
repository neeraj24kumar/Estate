// const Map = () => {
//   return (
//     <div>
//       <img
//         src="/images/google-map3.jpg"
//         alt=""
//         className="w-full h-[200px] object-cover"
//       />
//     </div>
//   );
// };

// export default Map;

import React from 'react';

const Map = () => {
  const naviMumbaiEmbedURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120784.15672449876!2d72.94172773598757!3d19.04694490126096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e397ad63c69d%3A0x89d87563e0b79a21!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718884243703!5m2!1sen!2sin`;
  const mumbaiEmbedURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483133.7437726414!2d72.74109678945313!3d19.07602036484035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63066440c6b%3A0x5da690b846a35c5!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718884305497!5m2!1sen!2sin`;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row', // Ensure maps are side-by-side on larger screens
      flexWrap: 'wrap',     // Allow maps to wrap to the next line on smaller screens
      justifyContent: 'space-around',
      alignItems: 'stretch', // Make maps have equal height
    }}>

      <div style={{
        width: 'calc(50% - 20px)',  // Occupy half the width, minus some spacing
        maxWidth: '600px', // Limit maximum width
        margin: '10px',
        aspectRatio: '4 / 3',        // Fixed rectangle aspect ratio (width / height)
        position: 'relative',       // For absolute positioning of iframe
      }}>
        <h3>Navi Mumbai</h3>
        <iframe
          title="Navi Mumbai Map"
          src={naviMumbaiEmbedURL}
          style={{
            border: 0,
            position: 'absolute', // Take the whole space of its parent
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{
        width: 'calc(50% - 20px)',  // Occupy half the width, minus some spacing
        maxWidth: '600px', // Limit maximum width
        margin: '10px',
        aspectRatio: '4 / 3',        // Fixed rectangle aspect ratio (width / height)
        position: 'relative',       // For absolute positioning of iframe
      }}>
        <h3>Mumbai</h3>
        <iframe
          title="Mumbai Map"
          src={mumbaiEmbedURL}
          style={{
            border: 0,
            position: 'absolute', // Take the whole space of its parent
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;



