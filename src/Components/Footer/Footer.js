import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="inline-grid grid-cols-3 gap-4">
              <a href="https://github.com/Cansualtun" target="blank">
                <FaGithub style={{ height: 80, width: 50 }} />
              </a>
              <a href="https://twitter.com/cansualtunn" target="blank">
                <FaTwitter style={{ height: 80, width: 50 }} />
              </a>
              <a href="https://www.linkedin.com/in/cansualtun/" target="blank">
                <FaLinkedin style={{ height: 80, width: 50 }} />
              </a>
            </span>
            <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
