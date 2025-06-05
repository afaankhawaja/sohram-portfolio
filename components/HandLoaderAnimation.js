// components/HandLoaderAnimation.js
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const HandLoaderAnimation = ({ loop = true, autoplay = true }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        // Fetch the JSON from the public directory
        const response = await fetch("/assets/hand-loader-animation.json");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching Lottie animation:", error);
      }
    };
    fetchAnimation();
  }, []); // Empty dependency array means this runs once on mount

  if (!animationData) {
    return <div>Loading animation...</div>;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      // style={{height:'1080px',width:'100%'}} // Pass in custom styles for width/height
    />
  );
};

export default HandLoaderAnimation;
