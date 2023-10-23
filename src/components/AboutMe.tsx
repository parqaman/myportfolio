import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    rootMargin: "0% 0% -50% 0%", // Offset to trigger animation when the center is reached
  });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
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
