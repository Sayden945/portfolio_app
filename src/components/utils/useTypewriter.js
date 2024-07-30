import { useState, useEffect } from "react";

/* Custom hook to create a typewriter effect for text */
const useTypewriter = (text, speed = 50) => {
  // State to hold the current display text
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    // Interval to update the display text at the specified speed
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        // Update the display text one character at a time
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        // Clear the interval once the entire text is displayed
        clearInterval(typingInterval);
      }
    }, speed);

    // Cleanup function to clear the interval when the component unmounts or dependencies change
    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]); // Dependencies array to re-run the effect when text or speed changes

  return displayText; // Return the current display text
};

/* Component to display text with a typewriter effect */
const Typewriter = ({ text, speed }) => {
  // Use the custom hook to get the display text
  const displayText = useTypewriter(text, speed);

  // Render the display text inside a paragraph element
  return <p>{displayText}</p>;
};

export default Typewriter; // Export the Typewriter component as the default export
