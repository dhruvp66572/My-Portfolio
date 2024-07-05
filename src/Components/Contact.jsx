import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import GitHubButton from 'react-github-btn'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-9"
          href={`tel:${CONTACT.phoneNo}`}
        >
          {CONTACT.phoneNo}
        </motion.a>
        <br />
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
      <div className="
      flex justify-center mt-10 
      ">
         {/* <!-- Place this tag where you want the button to render. --> */}
         <GitHubButton href="https://github.com/dhruvp66572" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" aria-label="Follow @dhruvp66572 on GitHub">Follow @dhruvp66572</GitHubButton>
      </div>
    </div>
  );
};

export default Contact;
