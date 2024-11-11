import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-400  text-blue-900  h-12 py-2 px-3  flex justify-between items-center">
        <div className="flex items-center space-x-2 mb-3 sm:mb-0">
           
          <h1 className="font-bold text-2xl   text-blue-900">
            
            <a href="#!">Muhammad Imran Iqbal</a>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-red-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/Products" className="hover:text-red-500">
                Products
              </Link>
            </li>
            <li>
              <Link href="/Contact-us" className="hover:text-red-500">
                Contact-us
              </Link>
            </li>
            <li>
              <Link href="/Footer" className="hover:text-red-500">
                Footer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
