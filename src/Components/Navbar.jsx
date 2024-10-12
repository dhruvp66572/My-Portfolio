import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="" /> */}
        <h1 className="text-3xl font-bold font-sans cursor-pointer">DP</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="cursor-pointer hover:text-[#0A66C2] transition-all duration-300 ease-in-out"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/dhruv-prajapati-088721260/"
            )
          }
        />
        <FaGithub
          className="cursor-pointer hover:text-[#333] transition-all duration-300 ease-in-out"
          onClick={() => window.open("https://github.com/dhruvp66572")}
        />
        <FaXTwitter
          className="cursor-pointer hover:text-[#1DA1F2] transition-all duration-300 ease-in-out"
          onClick={() => window.open("https://x.com/Dhruv_P_572")}
        />
        <FaInstagram
          className="cursor-pointer hover:text-[#C13584] transition-all duration-300 ease-in-out"
          onClick={() => window.open("https://www.instagram.com/dp__572/")}
        />
       
      </div>
    </nav>
  );
};

export default Navbar;
