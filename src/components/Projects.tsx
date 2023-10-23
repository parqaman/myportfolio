import wms from "../assets/aws.png";
import ha_postgres from "../assets/node.png";
import gbt_website from "../assets/tailwind.png";
import quizup from "../assets/python.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    rootMargin: "0% 0% -50% 0%", // Offset to trigger animation when the center is reached
  });

  return (
    <motion.ul
      ref={ref}
      id="projects"
      className="h-screen flex flex-col items-center justify-start pt-28"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="transition-all duration-700 max-w-4xl w-full h-full pb-28">
        <div>
          <h1 className="text-4xl font-semibold">
            Projects and Contributions.
          </h1>
          <p className="text-xl">
            A preview of some of the projects I've worked on and contributed to.
          </p>
        </div>
        <div className="w-full gap-8 text-center py-8 h-full">
          {[
            {
              name: "Warehouse Management System",
              img: wms,
              description:
                "A platform for managing product across multiple warehouses, aiming to improve overall logistics, reducing errors, and enhancing operational efficiency by utilizing Firebase for seamless data synchronization, user authentication, and reliable data storage in the warehouse management system.",
              techStack: "Firebase, React, Electron",
            },
            // { name: "Highly Available PostgreSQL Cluster", img: ha_postgres },
            // { name: "GBT. Forum Website", img: gbt_website },
            // { name: "QuizUp - A Multiplayer Quiz Game", img: quizup },
          ].map((project) => (
            <motion.li
              key={project.name}
              className={` border-1.5 border-secondary flex flex-col items-center justify-between rounded-sm pt-4 h-full`}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
            >
              <p className="pb-1 font-bold">{project.name}</p>
              <div className="h-full flex items-center my-4">
                <img
                  className="w-[5.5rem] mx-auto"
                  src={project.img}
                  alt={project.name}
                />
              </div>
              <p className="my-4 px-12 text-justify">{project.description}</p>
              <p className="mb-4 px-12 text-justify w-full font-semibold">
                Tech Stack: {project.techStack}
              </p>
            </motion.li>
          ))}
        </div>
      </div>
    </motion.ul>
  );
};
