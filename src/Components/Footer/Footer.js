import React from "react";
import { FaCat, FaDog, FaPastafarianism } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span class="inline-grid grid-cols-3 gap-4">
              <FaCat style={{ height: 100, width: 50 }} />
              <FaDog style={{ height: 100, width: 50 }} />
              <FaPastafarianism style={{ height: 100, width: 50 }} />
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
