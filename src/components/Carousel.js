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

function Carousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Check scroll position
  const checkScroll = () => {
    if (!trackRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setScrollPosition(scrollLeft);
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const autoScroll = () => {
      if (!trackRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll) {
        // Reset to beginning
        trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll to next item (approximately 280px per item on desktop)
        trackRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    autoPlayRef.current = setInterval(autoScroll, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay]);

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

    setIsAutoPlay(false);
    // Resume autoplay after 8 seconds of user interaction
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const handleTrackScroll = () => {
    checkScroll();
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {demoImages.map((image, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={image}
                  alt={`App Screenshot ${index + 1}`}
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
