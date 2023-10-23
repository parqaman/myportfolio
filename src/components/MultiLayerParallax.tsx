import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import mountain_full from "../assets/mountain-full.jpg";
import mountain_bottom from "../assets/mountain-bottom.png";

export const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);

  return (
    <div
      ref={ref}
      className="w-screen h-screen overflow-hidden relative grid place-items-center"
      id="home"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-5xl md:text-8xl relative z-10 flex flex-col justify-center items-center"
      >
        <span>Farouq</span>
        <span>Abdurrahman</span>
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${mountain_full})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${mountain_bottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};
