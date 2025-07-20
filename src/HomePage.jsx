import React, { useState } from "react";
import { Mail, Moon, Sun, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div
        className={`transition-all duration-500 ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-b from-pink-100 to-pink-200 text-gray-800"
        } min-h-screen font-sans`}
      >

        {/* Top Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-12 px-4 text-center"
        >
          {/* Profile image and toggle in a flex row */}
          <div className="flex items-center justify-center gap-4 relative">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-40 h-40 rounded-full shadow-xl border-4 border-pink-300 object-cover"
            />
            {/* Toggle button next to profile image */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="absolute top-0 right-0 p-2 rounded-full shadow bg-white/80 hover:bg-white text-pink-500 dark:text-yellow-300 z-10"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          <h1 className="text-4xl font-extrabold text-pink-600 mt-4 mb-2 tracking-tight">Hi, I'm Maggie! 🌸</h1>
          <p className="text-lg italic text-pink-800 dark:text-pink-300">
            Aspiring Software Engineer | Creative Thinker | Builder of Cute Things
          </p>
        </motion.section>

        {/* About Me */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto p-6 mb-10 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-pink-200"
        >
          <h2 className="text-2xl font-bold mb-3 text-pink-500">💖 About Me</h2>
          <p className="text-md leading-relaxed">
            I'm a passionate software engineer who loves building adorable and functional
            web applications. I graduated from the University at Buffalo with a degree in
            Computer Science and a minor in Mathematics, and I currently work as a Software
            Engineer at Visa Inc. I enjoy creating user-friendly, colorful, and thoughtful
            experiences that bring joy to people.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto p-6 mb-10 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-pink-200"
        >
          <h2 className="text-2xl font-bold mb-3 text-pink-500">✨ Projects</h2>
          <div className="grid gap-4">
            <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-xl shadow border border-pink-100 hover:bg-pink-100 dark:hover:bg-gray-600">
              <h3 className="font-semibold text-pink-600 text-lg">CreativeHub</h3>
              <p className="text-sm">All-in-one productivity tool for creatives and students ✨</p>
            </div>
            <div className="bg-pink-50 dark:bg-gray-700 p-4 rounded-xl shadow border border-pink-100 hover:bg-pink-100 dark:hover:bg-gray-600">
              <h3 className="font-semibold text-pink-600 text-lg">Dog Breed Classifier</h3>
              <p className="text-sm">Used CNNs to classify dog breeds 🐶</p>
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
              href="/Maggie_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transition-transform hover:scale-105"
            >
              📄 Resume
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center py-4 text-sm text-pink-500 dark:text-pink-300">
          © {new Date().getFullYear()} Maggie Chen. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
