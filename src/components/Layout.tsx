import "animate.css";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <ul className="hidden sm:flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <button className="sm:hidden block text-xl">☰</button>
      </nav>
    </header>
    <main className="flex-grow container mx-auto p-4">{children}</main>
    <footer className="bg-gray-800 text-white text-center p-4">
      © {new Date().getFullYear()} My Portfolio
    </footer>
  </div>
);

export default Layout;
