import React from "react";
import Image from "next/image";
import image from "../../../public/image.png";
import Edubin from "../../../public/Edubin.jpg";
import burger from "../../../public/burger.jpeg";

const Projects = () => {
  
    return (
      <section id="projects" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1: Mercedes-Benz Clone */}
          <div className="bg-[#181818] p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src={image}
              alt="Mercedes-Benz Clone"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Clone Website of Mercedes-Benz
            </h3>
            <p className="text-gray-400 mb-4">I cloned this website using HTML, CSS, and JavaScript.</p>
            <a
              href="https://mercedez-benz-clone.vercel.app/"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-600  shadow-lg hover:bg-opacity-80 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
  
          {/* Project 2: Educational Website Clone */}
          <div className="bg-[#181818] p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src={Edubin}
              alt="Edubin Clone"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Clone of Educational Website
            </h3>
            <p className="text-gray-400 mb-4">Cloned an educational website using HTML, CSS, and JavaScript.</p>
            <a
              href="https://education-website-sage.vercel.app/"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 shadow-lg hover:bg-opacity-80 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
  
          {/* Project 3: Burger-King Clone */}
          <div className="bg-[#181818] p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src={burger}
              alt="Burger-King Clone"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Clone of Burger-King
            </h3>
            <p className="text-gray-400 mb-4">I cloned this website using HTML, CSS, and JavaScript.</p>
            <a
              href="https://burger-king-clone-nine.vercel.app/"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 shadow-lg hover:bg-opacity-80 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
  );
};

export default Projects;                                                                      
;