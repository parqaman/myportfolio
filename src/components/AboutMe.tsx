import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end end"],
  });

  return (
    <motion.div
      ref={aboutRef}
      style={{
        opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
      }}
      id="about"
      className="h-screen flex flex-col items-center justify-center text-justify"
    >
      <div className="transition-all duration-700 max-w-3xl flex flex-col gap-5">
        <h1 className="text-4xl font-semibold">About me.</h1>
        <p className="text-xl">
          Ever since I was young, I have been fascinated by computers and
          technology. As I grew older, I became interested in programming and
          software development. This led me to pursue a degree in computer
          science.
        </p>
        <p className="text-xl">
          I am currently in my final year at{" "}
          <strong>Darmstadt University of Applied Sciences</strong>. During one
          of my semester, I had the opportunity to take two elective modules,
          namely <strong>Data Warehouse Technologies</strong> and{" "}
          <strong>Advanced Web Development</strong>, which provided me with
          hands-on experience and exposure to the latest technologies in these
          fields.
        </p>
      </div>
    </motion.div>
  );
};
