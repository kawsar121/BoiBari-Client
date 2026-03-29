"use client";
import { Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const DropdownMenu = () => {
  const links = (
    <>
      <li className="text-taupe-600 hover:text-blue-300 mb-2">
        <Link href="#">Home</Link>
      </li>
      <li className="text-taupe-600 hover:text-blue-300 mb-2">
        <Link href="#">Shop</Link>
      </li>
      <li className="text-taupe-600 hover:text-blue-300 mb-2">
        <Link href="#">ABOUT</Link>
      </li>
      <li className="text-taupe-600 hover:text-blue-300 mb-2">
        <Link href="#">CONTACT</Link>
      </li>
      <li className="text-taupe-600 hover:text-blue-300">
        <Link href="#">ORDERS</Link>
      </li>
    </>
  );
  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <span className="md:hidden cursor-pointer">
          <IoIosMenu className="text-2xl hover:text-red-200" />
        </span>
      </Dropdown.Trigger>
      <Dropdown.Popover className="mt-2 mr-2">
        <Dropdown.Menu
          className="min-w-45 p-2 bg-white rounded-xl shadow-lg"
          onAction={(key) => console.log(`Selected: ${key}`)}
        >
          <Dropdown.Item
            id="copy-link"
            textValue="Copy Link"
            className="hover:bg-transparent focus:bg-transparent active:bg-transparent"
          >
            <div className=" items-center text-sm uppercase font font-medium list-none">
              {links}
            </div>
          </Dropdown.Item>
          {/* Social Media Start */}
          <Dropdown.Item className="hover:bg-transparent">
            <div className="flex gap-3">
              <Link href="#">
              <FaFacebook className="text-xl" />
            </Link>
            <Link href="#">
              <FaInstagram className="text-xl" />
            </Link>
            <Link href="#">
              <FaXTwitter className="text-xl" />
            </Link>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default DropdownMenu;
