import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const TrueFocus = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState(null);

  useEffect(() => {
    if (!wordRefs.current[0] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[0].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, []);

  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : currentIndex;
    if (targetIndex === null || targetIndex === -1) return;
    if (!wordRefs.current[targetIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[targetIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, hoveredIndex]);

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        if (hoveredIndex === null) {
          setCurrentIndex((prev) => {
            if (prev === null || prev >= words.length - 1) {
              return 0;
            }
            return prev + 1;
          });
        }
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length, hoveredIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setCurrentIndex(null);
  };

  const handleMouseLeave = () => {
    setCurrentIndex(hoveredIndex !== null ? hoveredIndex : 0);
    setHoveredIndex(null);
  };

  return (
    <div
      className={`relative flex gap-1 justify-center items-center ${className}`}
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = hoveredIndex === null && index === currentIndex;
        const isHovered = index === hoveredIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="relative font-black cursor-pointer select-none px-0.5"
            style={{
              filter: (isActive || isHovered) ? 'blur(0px)' : `blur(${blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: `all ${animationDuration}s cubic-bezier(0.4, 0, 0.2, 1)`,
              opacity: (isActive || isHovered) ? 1 : 0.5,
              transform: (isActive || isHovered) ? 'scale(1.02)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      {focusRect && (
        <motion.div
          className="absolute top-0 left-0 pointer-events-none box-border border-0"
          initial={false}
          animate={{
            x: focusRect.x - 2,
            y: focusRect.y,
            width: focusRect.width + 4,
            height: focusRect.height,
            opacity: (currentIndex >= 0 || hoveredIndex !== null) ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
            duration: hoveredIndex !== null ? 0.15 : animationDuration,
          }}
          style={{
            "--border-color": borderColor,
            "--glow-color": glowColor,
          }}
        >
          <span
            className="absolute w-2 h-2 border-[2px] rounded-[2px] top-[-5px] left-[-5px] border-r-0 border-b-0"
            style={{
              borderColor: "var(--border-color)",
              filter: "drop-shadow(0 0 2px var(--border-color))",
            }}
          ></span>
          <span
            className="absolute w-2 h-2 border-[2px] rounded-[2px] top-[-5px] right-[-5px] border-l-0 border-b-0"
            style={{
              borderColor: "var(--border-color)",
              filter: "drop-shadow(0 0 2px var(--border-color))",
            }}
          ></span>
          <span
            className="absolute w-2 h-2 border-[2px] rounded-[2px] bottom-[-5px] left-[-5px] border-r-0 border-t-0"
            style={{
              borderColor: "var(--border-color)",
              filter: "drop-shadow(0 0 2px var(--border-color))",
            }}
          ></span>
          <span
            className="absolute w-2 h-2 border-[2px] rounded-[2px] bottom-[-5px] right-[-5px] border-l-0 border-t-0"
            style={{
              borderColor: "var(--border-color)",
              filter: "drop-shadow(0 0 2px var(--border-color))",
            }}
          ></span>
        </motion.div>
      )}
    </div>
  );
};

TrueFocus.propTypes = {
  sentence: PropTypes.string,
  manualMode: PropTypes.bool,
  blurAmount: PropTypes.number,
  borderColor: PropTypes.string,
  glowColor: PropTypes.string,
  animationDuration: PropTypes.number,
  pauseBetweenAnimations: PropTypes.number,
  className: PropTypes.string,
};

TrueFocus.defaultProps = {
  sentence: "True Focus",
  manualMode: false,
  blurAmount: 5,
  borderColor: "green",
  glowColor: "rgba(0, 255, 0, 0.6)",
  animationDuration: 0.5,
  pauseBetweenAnimations: 1
};

export default TrueFocus; 