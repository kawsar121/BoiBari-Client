import React from "react";
import SearchInput from "../Components/SearchInput";
import { IoIosMenu } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import ThemeToggle from "../../../Theme/ThemeToggle";
import Link from "next/link";
function Navbar() {
  const link = <>
      <li className="text-taupe-600 hover:text-taupe-400"><Link href='#'>Home</Link></li>
      <li className="text-taupe-600 hover:text-taupe-400"><Link href='#'>Shop</Link></li>
      <li className="text-taupe-600 hover:text-taupe-400"><Link href='#'>Home</Link></li>
      <li className="text-taupe-600 hover:text-taupe-400"><Link href='#'>Home</Link></li>
      <li className="text-taupe-600 hover:text-taupe-400 relative">
        <Link href='#'><IoMdCart className="text-2xl" /></Link>
        <span className="absolute -right-2 -top-1">0</span>
      </li>
      <li className="text-taupe-600 hover:text-taupe-400"><Link href='#'><FaUserAlt className="text-xl" /></Link></li>
      <li className="text-taupe-600 hover:text-taupe-400"><Link href='#'><ThemeToggle></ThemeToggle></Link></li>
  </>
  return (
    <div className="border-b border-slate-300">
      <div className="flex items-center justify-between py-7 gap-x-3 md:gap-x-7">
        <h2>Logo</h2>
        <SearchInput></SearchInput>
        {/* Menu */}
        <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font font-medium list-none">
          {link}
        </div>
        <IoIosMenu  className="text-2xl hover:text-red-200 md:hidden"/>
      </div>
    </div>
  );
}

export default Navbar;
