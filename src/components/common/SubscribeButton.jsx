import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './NewsLetter.css'; // Import the CSS file

const SubscribeButton = () => {
  const handleSubscribe = () => {
    window.open('https://www.youtube.com/@wabwenibrian66', '_blank');
  };

  const buttonStyle = {
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    display: 'flex',          // Align icon and text horizontally
    alignItems: 'center',   // Center items vertically
    gap: '8px',               // Add spacing between icon and text
    transition: 'background-color 0.3s ease', // Smooth transition for hover
  };

  const buttonHoverStyle = {
    backgroundColor: '#CC0000', // Darker red on hover
  };

  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <button
      onClick={handleSubscribe}
      style={{ ...buttonStyle, ...(isHovering ? buttonHoverStyle : {}) }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="youtube-subscribe-button" // Add a class for styling
    >
      <FontAwesomeIcon icon={faYoutube} />
      YouTube
    </button>
  );
};

export default SubscribeButton;
