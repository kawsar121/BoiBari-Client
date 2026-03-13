import React from "react";
import SearchInput from "../Components/SearchInput";
import { IoIosMenu } from "react-icons/io";
function Navbar() {
  return (
    <div className="border-b border-slate-300">
      <div className="flex items-center justify-between py-7 gap-x-3 md:gap-x-7">
        <h2>Logo</h2>
        <SearchInput></SearchInput>
        {/* Menu */}
        <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font font-medium text-lime-100">
          <p>Navliks</p>
          <p>Navliks</p>
          <p>Navliks</p>
        </div>
        <IoIosMenu  className="text-2xl hover:text-red-200 md:hidden"/>
      </div>
    </div>
  );
}

export default Navbar;
