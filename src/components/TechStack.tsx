import ansible from "../assets/ansible.png";
import ReactImg from "../assets/react.png";
import aws from "../assets/aws.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import docker from "../assets/docker.png";
import postgresql from "../assets/postgresql.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once when it comes into view
    rootMargin: "0% 0% -75% 0%", // Offset to trigger animation when the center is reached
  });

  return (
    <motion.ul
      ref={ref}
      id="tech-stacks"
      className="h-screen flex flex-col items-center justify-center"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="transition-all duration-700 max-w-4xl w-full">
        <div>
          <h1 className="text-4xl font-semibold">Tech Stack.</h1>
          <p className="text-xl">Technologies I'm familiar with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {[
            { name: "AWS", img: aws },
            { name: "Ansible", img: ansible },
            { name: "Docker", img: docker },
            { name: "PostgreSQL", img: postgresql },
            { name: "React", img: ReactImg },
            { name: "Node", img: Node },
            { name: "Tailwind", img: Tailwind },
            { name: "Python", img: python },
          ].map((tech) => (
            <motion.li
              key={tech.name}
              className="shadow-sm shadow-[#222222] flex flex-col items-center justify-between"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="h-full flex items-end pb-1">
                <img
                  className="w-[5.5rem] mx-auto"
                  src={tech.img}
                  alt={tech.name}
                />
              </div>
              <p className="my-4">{tech.name}</p>
            </motion.li>
          ))}
        </div>
      </div>
    </motion.ul>
  );
};
