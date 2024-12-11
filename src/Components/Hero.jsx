import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";

const containerVariants = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-6 lg:px-0">
            <motion.h1
              variants={containerVariants(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-bold tracking-tight lg:mt-16 lg:text-7xl"
            >
              Dhruv Prajapati
            </motion.h1>
            <motion.span
              variants={containerVariants(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-6"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={containerVariants(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-neutral-400 text-justify"
            >
             <p className="text-lg text-neutral-400">
              {HERO_CONTENT}
              </p> 
            </motion.p>
            <motion.div
              variants={containerVariants(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6"
            >
              <a
                href="/Dhruv_Prajapati_Resume.pdf"
                download="Dhruv_Prajapati_Resume"
                className="inline-block bg-purple-700 text-white px-6 my-4 py-3 rounded-lg text-sm font-medium 
                hover:bg-purple-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg"
              >
                Get Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="rounded-lg w-72 h-72 lg:w-96 lg:h-96 object-cover shadow-2xl"
              src={
                "https://res.cloudinary.com/dbdydwgys/image/upload/v1728750816/DPProfile_dcloav.jpg"
              }
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
