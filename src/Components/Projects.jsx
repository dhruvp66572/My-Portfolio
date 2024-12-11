import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = ({ count, enable }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (count === null) {
    count = PROJECTS.length;
  } 

  const projects = PROJECTS.slice(0, count);

  console.log(projects);
  return (
    <div className="border-b border-neutral-900 pb-4 py-16">
      <div className="flex justify-between ">
        <div></div>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center text-4xl font-bold  "
        >
          Projects
          <span role="img" aria-label="projects">
            🚀
          </span>
        </motion.h2>

        {!enable ? (
          <div></div>
        ) : (
          <Link to="/" className="mb-20 top-4 left-4">
            <button
              type="button"
              className="bg-neutral-900 text-sm border border-black rounded-md px-4 py-1 text-purple-800 hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left inline mr-2 mb-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"
                />
              </svg>
              Back
            </button>
          </Link>
        )}
      </div>

      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 "
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded-2"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:h-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}

              <div 
                className="flex flex-wrap space-x-2"
              >
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-neutral-900
                    text-sm 
                    border border-black rounded-md px-4 py-1 my-2 text-purple-800 hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right inline mr-2 mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 1a.5.5 0 0 1 .5.5V4h3.5a.5.5 0 0 1 0 1H11v3.5a.5.5 0 0 1-1 0V5H6.5a.5.5 0 0 1 0-1h4V1.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M2.5 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h.5V2.5H3a.5.5 0 0 1-.5-.5z" />
                      <path d="M11.354 4.354a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z" />
                    </svg>
                    Live Link
                  </a>
                ) : (
                  <div></div>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-neutral-900
                    text-sm 
                    border border-black rounded-md px-4 py-1 my-2 text-purple-800 hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github inline mr-2 mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    Github
                  </a>
                ) : (
                  <div></div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {!enable ? (
        <div className="flex justify-center">
          <Link to="/projects">
            <button
              type="button"
              className="bg-neutral-900 text-sm border border-black rounded-md px-4 py-1 text-purple-800 hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              View More Projects
            </button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Projects;
