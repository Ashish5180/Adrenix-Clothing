import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#F5F5F5]">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        Adrenix!<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/free-photo/young-handsome-business-man-outside-business-center_1303-13941.jpg?t=st=1732255186~exp=1732258786~hmac=fd3be168f4b0f7b7ce26b505dfc0d68c9eccdabf946125118524df17760edc56&w=740"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/premium-photo/young-man-looking-away-while-standing-snow_1048944-15311460.jpg?w=740"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/free-photo/man-jacket-posing-with-hand-head_23-2148248458.jpg?t=st=1732255249~exp=1732258849~hmac=de5c6a7c791771d28eab4f74dd0ae9db91f24c5a2fad2ac74d4b895cd0f47f7b&w=740"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/free-photo/portrait-fashionable-boy-outdoors_23-2148184870.jpg?t=st=1732255289~exp=1732258889~hmac=e2b96f0e499b6f8affd7ec0bbb5bcc8c55eb9f24e87d83b691195a395d5b7667&w=740"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/free-photo/young-handsome-man-street-outfit_1303-19656.jpg?t=st=1732255309~exp=1732258909~hmac=e84ecf370c7732f39c6b1f6416d127f003b02fec62e2bf8193cfa5c50b7cbf6f&w=740"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/free-photo/young-handsome-man-coat-outside-street_1303-20176.jpg?t=st=1732255328~exp=1732258928~hmac=68b109c879908a78c7d6c70793e622e412431743d05cabd4e65f4c78c13e8a34&w=740"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};