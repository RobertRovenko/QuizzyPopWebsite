// src/components/Carousel.js
import React, { useState, useEffect, useRef } from "react";

import "./Carousel.css";

// Import your 8 demo images - adjust paths as needed
import demo1 from "../assets/images/demo1.png";
import demo2 from "../assets/images/demo2.png";
import demo3 from "../assets/images/demo3.png";
import demo4 from "../assets/images/demo4.png";
import demo5 from "../assets/images/demo5.png";
import demo6 from "../assets/images/demo6.png";
import demo7 from "../assets/images/demo7.png";
import demo8 from "../assets/images/demo8.png";

const demoImages = [demo1, demo2, demo3, demo4, demo5, demo6, demo7, demo8];

// Create a large array by cycling through demoImages with modulo
const CAROUSEL_SIZE = 100; // Number of items to render (enough for infinite feel)
const infiniteImages = Array.from(
  { length: CAROUSEL_SIZE },
  (_, i) => demoImages[i % demoImages.length],
);

function Carousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef(null);

  // Check scroll position
  const checkScroll = () => {
    if (!trackRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setScrollPosition(scrollLeft);
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Set up scroll event listener
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", handleTrackScroll);
    return () => track.removeEventListener("scroll", handleTrackScroll);
  }, []);

  const scroll = (direction) => {
    if (!trackRef.current) return;

    const scrollAmount = 300;
    const newPosition =
      direction === "left"
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;

    trackRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const handleTrackScroll = () => {
    checkScroll();
  };

  return (
    <section className="carousel-section">
      {/* Decorative Blobs */}
      <div className="carousel-blob carousel-blob-top-left" />

      <div className="carousel-container">
        <div className="carousel-header">
          <h2 className="carousel-title">Experience the App</h2>
          <p className="carousel-subtitle">
            Explore our intuitive interface and powerful features
          </p>
        </div>

        <div className="carousel-wrapper">
          {/* Left Navigation Button */}
          <button
            className={`carousel-nav-button carousel-nav-prev ${
              !canScrollLeft ? "disabled" : ""
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll carousel left"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Carousel Track */}
          <div
            className="carousel-track"
            ref={trackRef}
            onScroll={handleTrackScroll}
          >
            {infiniteImages.map((image, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={image}
                  alt={`App Screenshot ${(index % demoImages.length) + 1}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            className={`carousel-nav-button carousel-nav-next ${
              !canScrollRight ? "disabled" : ""
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll carousel right"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="carousel-indicator">
          {canScrollRight && (
            <span className="scroll-hint">← Scroll for more →</span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
