import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import GitHubButton from "react-github-btn";

const Contact = () => {
  return (
    <div className=" text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-5xl font-extrabold text-purple-400 tracking-wide"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Information */}
      <div className="text-center space-y-6">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          📍 {CONTACT.address}
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href={`tel:${CONTACT.phoneNo}`}
          className="block text-xl md:text-2xl text-purple-300 hover:text-purple-500 transition-all duration-300 ease-in-out"
        >
          📞 {CONTACT.phoneNo}
        </motion.a>

        <a
          href={`mailto:${CONTACT.email}`}
          className="block text-xl md:text-2xl text-purple-300 border-b border-purple-300 hover:border-purple-500 hover:text-purple-500 transition-all duration-300 ease-in-out"
        >
          ✉️ {CONTACT.email}
        </a>
      </div>

      {/* GitHub Button */}
      <div className="flex justify-center mt-12">
        <GitHubButton
          href="https://github.com/dhruvp66572"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Follow @dhruvp66572 on GitHub"
        >
          Follow @dhruvp66572
        </GitHubButton>
      </div>

      {/* Social Media Links with Animation */}
      <div className="flex justify-center gap-8 mt-12 text-4xl">
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/dhruv-prajapati-088721260/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/dhruvp66572"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 transition duration-300"
        >
          <i className="fab fa-github"></i>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          href="https://x.com/Dhruv_P_572"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <i className="fab fa-twitter"></i>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.instagram.com/dp__572/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 transition duration-300"
        >
          <i className="fab fa-instagram"></i>
        </motion.a>
      </div>

      {/* Decorative Divider */}
      {/* <div className="mt-12 flex justify-center">
        <motion.div
          whileInView={{ scaleX: 1 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.7 }}
          className="h-1 w-2/3 bg-purple-400"
        ></motion.div>
      </div> */}

      {/* Call-to-Action Button */}
      {/* <div className="mt-12 flex justify-center">
        <motion.a
          href="https://calendly.com/dhruv-prajapati/meeting"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg shadow-lg text-lg font-medium transition-all duration-300 transform hover:translate-y-1"
        >
          Schedule a Meeting
        </motion.a>
      </div> */}
    </div>
  );
};

export default Contact;
