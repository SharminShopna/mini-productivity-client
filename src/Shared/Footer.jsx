import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import footer from "../../src/assets/logo/logo2.png";
import bg from "../../src/assets/footer/footerBg.jpg";
import "../index.css";
const Footer = () => {
  return (
    <div className="">
      {/* Main Footer Section */}
      <div
        className="bg-base-200 relative bg-cover bg-center py-16 text-white text-lg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-teal-800 opacity-70"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-10/12 mx-auto gap-8 relative">
          {/* Footer Image */}
          <div className="justify-center text-center">
            <img
              src={footer}
              alt="ProdigyBoard"
              className="lg:w-[200px] w-[100px] mx-auto rounded-full"
            />
            <h2 className="Logo mt-3">ProdigyBoard</h2>
            <p className="italic text-sm mt-1">
              Fueling goals with focus and motivation
            </p>
          </div>
          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-8">
            <nav>
              <h6 className="footer-title text-lg font-extrabold mb-3">Features</h6>
              <a href="/dashboard/tasks" className="link link-hover block">Task Dashboard</a>
              <a href="/dashboard/goals" className="link link-hover block">Goal Planner</a>
              <a href="/dashboard/quote" className="link link-hover block">Motivational Quotes</a>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-6">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaFacebook className="text-3xl text-white hover:text-[#1877F2] dark:text-white" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaLinkedin className="text-3xl text-white hover:text-[#0A66C2] dark:text-white" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaWhatsapp className="text-3xl text-white hover:text-[#25D366] dark:text-white" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaGithub className="text-3xl text-white hover:text-[#181717] dark:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Divider */}
          <div className="mt-8 w-full mx-auto border-b border-white dark:border-gray-600"></div>

          {/* Footer Bottom Section */}
          <div className="text-center p-4">
            <p className="text-xs md:text-sm font-thin">
              Copyright ©️ {new Date().getFullYear()} - All rights reserved by
              <span className="font-bold text-tealGreen ml-1">ProdigyBoard</span>
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="w-full mx-auto border-b border-white dark:border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
