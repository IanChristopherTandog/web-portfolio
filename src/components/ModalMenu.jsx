import React from "react";
import { FiDownload } from "react-icons/fi";

export default function ModalMenu({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-72 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col gap-4">
          <a
            href="#about"
            className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={onClose}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={onClose}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={onClose}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={onClose}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-1 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={onClose}
          >
            <FiDownload />
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
}
