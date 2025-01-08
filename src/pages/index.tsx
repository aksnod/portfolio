import Layout from "@/components/Layout";
import Image from "next/image";
import "../styles/globals.css";

import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";
const Home = () => {
  return (
    <Layout>
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-3xl shadow-2xl  bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>{" "}
        {/* Dark overlay for contrast */}
        <div className="relative text-center px-6 md:px-12 z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg transform opacity-0 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-6 opacity-0 animate__animated animate__fadeIn animate__delay-2s">
            A showcase of my work, skills, and passion for web development.
          </p>
          <a
            href="#about"
            className="inline-block py-2 px-6 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore More
          </a>
        </div>
      </section>

      <section id="about" className="p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-full shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Profile Photo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-4">Shyam Narayan</h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-2">
            Software Engineer | Full-Stack Developer
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 mt-5 mb-10 shadow-2xl rounded-3xl transform ">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            I am skilled full-stack developer to create bespoke software
            solutions. I’m dedicated to crafting intuitive solutions for complex
            problems. With around 5 years of experience, I’ve developed web
            applications, eCommerce marketplaces, SaaS products, and software
            solutions from scratch and customized existing solutions for clients
            globally. I’m also an expert in infrastructure, front-end and
            back-end development, and deployment on production servers.
          </p>
        </div>
      </section>

      <Projects />

      <Skills />
      <Contact />
    </Layout>
  );
};

export default Home;
