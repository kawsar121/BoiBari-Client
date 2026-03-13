'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function SearchInput() {
    const [search, setSearch] = useState('')
  return (
    <div className=' flex-1 h-10 relative'>
        <input type="text" name="" id="" placeholder='Search your products'  className='w-full h-full border border-gray-700 focus-visible:border-blue-400 rounded-full outline-none pl-4 pr-10 text-pink-300'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        {search?
            <IoMdClose onClick={()=> setSearch('')}  className="absolute text-xl top-2.5 right-4 hover:text-red-400 cursor-pointer duration-300"/> :
            <CiSearch className="absolute text-xl top-2.5 right-4" />
        }
        
    </div>
  )
}
