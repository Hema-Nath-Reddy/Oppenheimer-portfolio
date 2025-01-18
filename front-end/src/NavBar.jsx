import React, { useState } from "react";
import { Link } from "react-router-dom";
import ParticleAnimation from "./ParticleAnimation";

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const links = [
    {
      href: "https://github.com/Hema-Nath-Reddy",
      label: "Github Profile Link",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/hema-nath-reddy-yeruva/",
      label: "LinkedIn Profile Link",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      ),
    },
    {
      href: "Hema Nath Reddy Y (CV).pdf",
      label: "CV of Hema Nath Reddy Y",
      svg: (
        <svg
          viewBox="0 0 846.66 846.66"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }}
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="Layer_x0020_1">
            <path
              className="fil0"
              d="M94.63 9.1l483.79 0c4.99,0.04 9.19,1.59 12.96,4.56l171.53 121.21c5.9,3.65 9.84,10.18 9.84,17.63l0 664.35c0,11.44 -9.28,20.71 -20.71,20.71l-657.41 0c-11.44,0 -20.72,-9.27 -20.72,-20.71l0 -787.04c0,-11.44 9.28,-20.71 20.72,-20.71zm137.12 519.85c-27.24,0 -27.24,-41.42 0,-41.42l383.16 0c27.25,0 27.25,41.42 0,41.42l-383.16 0zm0 205.05c-27.24,0 -27.24,-41.42 0,-41.42l383.16 0c27.25,0 27.25,41.42 0,41.42l-383.16 0zm0 -102.52c-27.24,0 -27.24,-41.43 0,-41.43l383.16 0c27.25,0 27.25,41.43 0,41.43l-383.16 0zm131.55 -328.81c30.97,23.15 49.31,59.43 49.31,98.21 0,11.44 -9.27,20.71 -20.71,20.71l-203.63 0c-11.44,0 -20.72,-9.27 -20.72,-20.71 0,-38.78 18.35,-75.06 49.31,-98.21 -10.99,-15.01 -17.49,-33.53 -17.49,-53.56 0,-50.09 40.62,-90.71 90.71,-90.71 50.1,0 90.71,40.62 90.71,90.71 0,20.03 -6.49,38.55 -17.49,53.56zm-113.46 27.76c-18.9,10.8 -32.7,28.69 -38.21,49.74l156.91 0c-5.51,-21.05 -19.31,-38.94 -38.22,-49.74 -12.12,6.01 -25.79,9.39 -40.24,9.39 -14.45,0 -28.11,-3.38 -40.24,-9.39zm40.24 -130.6c-27.22,0 -49.28,22.06 -49.28,49.28 0,27.23 22.06,49.29 49.28,49.29 27.22,0 49.29,-22.06 49.29,-49.29 0,-27.22 -22.06,-49.28 -49.29,-49.28zm441.25 -26.62l-152.91 0c-11.43,0 -20.71,-9.28 -20.71,-20.71l0 -101.98 -442.37 0 0 745.62 615.99 0 0 -622.93zm-132.2 -103.45l0 62.03 87.78 0 -87.78 -62.03z"
            />
          </g>
        </svg>
      ),
    },
    {
      href: "mailto:hemanathreddy.yeruva@gmail.com",
      label: "Email Hema Nath Reddy Y",
      svg: (
        <svg
          className="gmail-svg"
          viewBox="7.086 -169.483 1277.149 1277.149"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z
         M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z"
            fill="#ffffc7"
            stroke="none"
            strokeidth="0"
          />
          <path
            fill="transparent"
            d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"
          />
          <path
            fill="transparent"
            d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <nav>
        <div className="name">
          <h1>Hema Nath Reddy Y</h1>
        </div>
        <div className="links">
          <Link to="/">About Me</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact-me">Contact Me</Link>
        </div>
      </nav>
      <div className="link">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={
              hoveredIndex === index
                ? "mainScale"
                : hoveredIndex !== null
                ? "leftScale"
                : ""
            }
          >
            {link.svg}
          </a>
        ))}
      </div>
      <ParticleAnimation />
    </>
  );
};

export default NavBar;
