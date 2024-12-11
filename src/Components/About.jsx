import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold"
      >
        About
        <span className="text-purple-800"> Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        {/* Left Section: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105"
              src={aboutImg}
              alt="About Me"
            />
          </div>
        </motion.div>

        {/* Right Section: Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start px-4 lg:px-0">
            <div className="my-2 max-w-xl space-y-6 text-lg text-neutral-400">
              <p>
                Hello, I&apos;m{" "}
                <span className="text-purple-800 font-bold">
                  Dhruv Prajapati
                </span>
                , a skilled and innovative full-stack web developer with a
                strong focus on delivering seamless user experiences. My journey
                in technology is fueled by a passion for problem-solving,
                creating impactful web applications, and pushing the boundaries
                of my skills in dynamic environments.
              </p>
              <p>
                My expertise lies in modern technologies like
                <span className="text-white font-medium">
                  {" "}
                  React.js, Next.js, Node.js, and MongoDB
                </span>
                . I specialize in crafting responsive, efficient, and visually
                appealing solutions that align with user needs. Each project I
                undertake reflects my commitment to excellence, adaptability,
                and staying ahead in the ever-evolving tech landscape.
              </p>
              <p>
                Beyond coding, I thrive in collaborative environments, exploring
                <span className="text-purple-800 font-medium">
                  {" "}
                  cutting-edge technologies
                </span>
                , and contributing to open-source initiatives. I am passionate
                about continuous learning and enjoy engaging with the developer
                community to share knowledge and inspire innovation.
              </p>

              <div className="pt-4">
                <Link to="/projects"                
                  className="text-sm bg-neutral-900 text-purple-800 border border-neutral-800 px-4 py-2 rounded-md 
                  hover:bg-purple-800 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Explore My Projects
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
