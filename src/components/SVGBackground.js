// src/components/SVGBackground.js
import React from "react";
import "./SVGBackground.css";

function SVGBackground() {
  return (
    <div className="svg-background">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="0" y="0" width="900" height="600" fill="#001220"></rect>
        <defs>
          <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stopColor="#001220" stopOpacity="1"></stop>
            <stop offset="80%" stopColor="#001220" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
            <stop offset="20%" stopColor="#001220" stopOpacity="1"></stop>
            <stop offset="80%" stopColor="#001220" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        {/* Removed the top-right blob g element */}
        <g transform="translate(0, 600)">
          <path
            d="M0 -324.5C54.7 -331.8 109.4 -339.2 124.2 -299.8C139 -260.4 114 -174.3 143.5 -143.5C173.1 -112.8 257.3 -137.5 296.6 -122.8C335.8 -108.2 330.2 -54.1 324.5 0L0 0Z"
            fill="#00CC8E"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default SVGBackground;
