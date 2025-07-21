import React, { useState } from "react";
import { Mail, Moon, Sun, Linkedin, Instagram, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-pink-100 to-pink-200 text-gray-800'} min-h-screen font-sans scroll-smooth`}>
      {/* Navigation Bar */}
      <nav className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-md py-4">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-500">Maggie Chen</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-pink-600">About</a></li>
            <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full shadow bg-white/80 hover:bg-white text-pink-500 dark:text-yellow-300"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Top Section with Image */}
      <motion.section
        id="top"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <img
          src={`${process.env.PUBLIC_URL}/profile.png`}
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-xl border-4 border-pink-300 object-cover mb-4"
        />
        <h1 className="text-4xl font-extrabold text-pink-600 mb-2 tracking-tight">Hi, I'm Maggie! 🌸</h1>
        <p className="text-lg italic text-pink-800 dark:text-pink-300">Software Engineer @ Visa | UB CS Graduate </p>
      </motion.section>

      {/* About Me */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="scroll-mt-20 max-w-3xl mx-auto p-6 mb-10 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-pink-200">
        <h2 className="text-2xl font-bold mb-3 text-pink-500">💖 About Me</h2>
        <p className="text-md leading-relaxed">
          I'm a passionate software engineer who loves building functional web applications that makes impact.
          I enjoy creating user-friendly, colorful, and thoughtful experiences that bring joy to people.<br />
          I graduated from the University at Buffalo with a degree in Computer Science and a minor in Mathematics. Currently, I work as a Software Engineer at Visa Inc.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="scroll-mt-20 max-w-3xl mx-auto p-6 mb-10 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-pink-200">
        <h2 className="text-2xl font-bold mb-3 text-pink-500">✨ Projects</h2>
        <div className="grid gap-4">
          <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-xl shadow border border-pink-100 hover:bg-pink-100 dark:hover:bg-gray-600">
            <h3 className="font-semibold text-pink-600 text-lg">CreativeHub</h3>
            <p className="text-sm">All-in-one productivity tool built with React, Node.js, and MySQL ✨</p>
          </div>
          <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-xl shadow border border-pink-100 hover:bg-pink-100 dark:hover:bg-gray-600">
            <h3 className="font-semibold text-pink-600 text-lg">PetAdopt</h3>
            <p className="text-sm">Pet adoption site with Django and PostgreSQL 🐾</p>
          </div>
          <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-xl shadow border border-pink-100 hover:bg-pink-100 dark:hover:bg-gray-600">
            <h3 className="font-semibold text-pink-600 text-lg">Dog Breed Classifier</h3>
            <p className="text-sm">CNN-based classifier using PyTorch & PyQt to identify dog breeds 🐶</p>
          </div>
          <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-xl shadow border border-pink-100 hover:bg-pink-100 dark:hover:bg-gray-600">
            <h3 className="font-semibold text-pink-600 text-lg">ExpenseTracker</h3>
            <p className="text-sm">Track and visualize expenses using React and Firebase 💸</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Me */}
      <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-pink-200 dark:bg-gray-700 p-8 text-center rounded-t-3xl shadow-inner"
        >
          <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-2">
            📫 Contact Me
          </h2>
          <p className="mb-4">I'd love to hear from you!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:maggiechen259@gmail.com"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transition-transform hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/maggiechenn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transition-transform hover:scale-105"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/maggiechen259"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transition-transform hover:scale-105"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/Maggie_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transition-transform hover:scale-105"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </div>
        </motion.section>
     
      {/* Footer */}
      <footer className="text-center py-4 text-sm text-pink-500 dark:text-pink-300">
        © {new Date().getFullYear()} Maggie Chen. All rights reserved.
      </footer>
    </main>
  );
}
