/* eslint-disable @next/next/no-img-element */
import React from "react";
import SearchInput from "../Components/SearchInput";
import { IoIosMenu } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import ThemeToggle from "../../../Theme/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import logo from "../../Assests/logo.png";
function Navbar() {
  const link = (
    <>
      <li className="text-taupe-600 hover:text-taupe-400">
        <Link href="#">Home</Link>
      </li>
      <li className="text-taupe-600 hover:text-taupe-400">
        <Link href="#">Shop</Link>
      </li>
      <li className="text-taupe-600 hover:text-taupe-400">
        <Link href="#">ABOUT</Link>
      </li>
      <li className="text-taupe-600 hover:text-taupe-400">
        <Link href="#">CONTACT</Link>
      </li>
      <li className="text-taupe-600 hover:text-taupe-400">
        <Link href="#">ORDERS</Link>
      </li>
    </>
  );
  const icons = (
    <>
      <li className="text-taupe-600 hover:text-taupe-400 relative text-2xl group">
        <Link href="#">
          <IoMdCart className="" />
        </Link>
        <span className="absolute -right-2 -top-1 rounded-full group-hover:bg-taupe-400 w-3.5 h-3.5 text-white text-[9px] flex items-center justify-center bg-gray-400 hoverEffect">
          0
        </span>
      </li>
      <li className="text-taupe-600 hover:text-taupe-400">
        <Link href="#">
          <FaUserAlt className="text-xl" />
        </Link>
      </li>
      <li className="text-taupe-600 hover:text-taupe-400">
        <Link href="#">
          <ThemeToggle></ThemeToggle>
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto border-b border-slate-300 sticky top-0 z-50 ">
        <div className="flex items-center justify-between py-7 gap-x-3 md:gap-x-7">
          <Link href="/">
            <Image src={logo} alt="logo" width={60} height={50}></Image>
          </Link>
          <SearchInput></SearchInput>
          {/* Menu */}
          <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font font-medium list-none">
            {link}
          </div>
          <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font font-medium list-none">
            {icons}
          </div>
          <IoIosMenu className="text-2xl hover:text-red-200 md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
