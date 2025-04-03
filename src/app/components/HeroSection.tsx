import React from "react";
import Image from "next/image";
import developer6 from "../../../public/developer6.webp";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Zainab.pdf"; // Ensure the file is placed in the 'public' folder
    link.download = "Zainab_Murtaza_CV.pdf"; // Rename the file upon download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#121212] text-white pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <div className="col-span-7 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Zainab Murtaza",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            I am passionate about creating visually appealing and highly
            functional digital solutions. Welcome to my world of web and mobile
            development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-opacity-80 text-white shadow-lg">
              Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-opacity-80 text-white"
            >
              <span className="block bg-[#121212] hover:bg-opacity-80 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="rounded-full bg-gradient-to-br from-gray-900 to-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-2xl">
            <Image
              src={developer6}
              alt="Developer"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
