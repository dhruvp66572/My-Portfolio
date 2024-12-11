import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-15 flex flex-col sm:flex-row items-center justify-between py-6 px-8 gap-4">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <h1 className="hidden sm:block text-3xl font-bold font-sans text-white cursor-pointer hover:text-purple-400 transition duration-300 ease-in-out">
          DP
        </h1>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 text-2xl">
        <FaLinkedin
          className="cursor-pointer text-white hover:text-[#0A66C2] transition-all duration-300 ease-in-out"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/dhruv-prajapati-088721260/"
            )
          }
        />
        <FaGithub
          className="cursor-pointer text-white hover:text-[#333] transition-all duration-300 ease-in-out"
          onClick={() => window.open("https://github.com/dhruvp66572")}
        />
        <FaXTwitter
          className="cursor-pointer text-white hover:text-[#1DA1F2] transition-all duration-300 ease-in-out"
          onClick={() => window.open("https://x.com/Dhruv_P_572")}
        />
        <FaInstagram
          className="cursor-pointer text-white hover:text-[#C13584] transition-all duration-300 ease-in-out"
          onClick={() => window.open("https://www.instagram.com/dp__572/")}
        />
      </div>

      {/* Get Resume Button */}
      <div className="sm:ml-4 hidden sm:block">
        <a
          href="/Dhruv_Prajapati_Resume.pdf"
          download="DhruvPrajapati_Resume"
          className="bg-purple-700 text-white px-6 py-3 sm:py-2 sm:px-4 rounded-lg text-base sm:text-sm font-medium hover:bg-purple-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md w-full sm:w-auto sm:mt-0 mt-4 text-center"
        >
          Get Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
