import ansible from "../assets/ansible.png";
import ReactImg from "../assets/react.png";
import aws from "../assets/aws.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import docker from "../assets/docker.png";
import postgresql from "../assets/postgresql.png";

export const TechStack = () => {
  return (
    <div
      id="tech-stacks"
      className="min-h-screen flex  flex-col items-center justify-center"
    >
      <div className="transition-all duration-700 max-w-4xl w-full">
        <div>
          <h1 className="text-4xl font-semibold">Tech Stack.</h1>
          <p className="text-xl">Technologies I'm familiar with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          <div className="shadow-sm shadow-[#222222] hover:scale-110 duration-500 flex flex-col items-center justify-between">
            <div className=" h-full flex items-end pb-1">
              <img className="w-[5.5rem] mx-auto" src={aws} alt="aws icon" />
            </div>
            <p className="my-4 ">AWS</p>
          </div>
          <div className="shadow-sm shadow-[#222222] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ansible} alt="ansible icon" />
            <p className="my-4">ANSIBLE</p>
          </div>
          <div className="shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={docker} alt="Docker icon" />
            <p className="my-4">DOCKER</p>
          </div>
          <div className="shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={postgresql}
              alt="Postgresql icon"
            />
            <p className="my-4">POSTGRESQL</p>
          </div>
          <div className="shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node JS icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-sm rounded-lg shadow-[#222222] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={python} alt="Chakra UI icon" />
            <p className="my-4">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};
