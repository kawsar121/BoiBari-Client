import Image from "next/image";
import React from "react";
import saleimg1 from "../../Assests/sales1.jpg";
import saleimg2 from "../../Assests/sales2.jpg";
import saleimg3 from "../../Assests/sales3.jpg";
import saleimg4 from "../../Assests/sales4.jpg";
import Link from "next/link";
const Sale = () => {
  return (
    <div className="h-full md:h-1/2 grid md:grid-cols-2 gap-2 md:gap-6 p-10">
      {/* Left */}
      <div className="w-full h-full md:h-[70%] relative group border border-gray-300 rounded-md overflow-hidden">
        <Image
          src={saleimg4}
          alt="BookImages"
          className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out opacity-80"
        />
        <div className="absolute  bg-black/40 text-white/80 w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-lg font-medium">
              10% Sale for all books
            </p>
            <p className="text-sm md:text-xl font-semibold">
              Offer on limited time
            </p>
            <Link
              href="#"
              className="bg-white/70 text-black px-8 py-3 rounded-md hover:bg-white duration-300 font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full h-full md:h-[70%] flex flex-col justify-between gap-2 md:gap-6 ">
        {/* Right-1 */}
        <div className="w-full h-full relative group border border-gray-300 rounded-md overflow-hidden ">
          <Image
            src={saleimg1}
            alt="BookImages"
            className="w-150 h-full object-cover group-hover:scale-110 duration-500 ease-in-out opacity-70"
          />
          <div className="absolute  bg-black/40 text-white/80 w-full h-full top-0 left-0 flex items-center">
            <div className="flex flex-col items-start p-10">
              <p className="text-sm md:text-lg font-medium">
                10% Sale for all books
              </p>
              <p className="text-sm md:text-xl font-semibold">
                Offer on limited time
              </p>
              <Link
                href="#"
                className="bg-white/70 text-black px-8 py-3 rounded-md hover:bg-white duration-300 font-medium"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        {/* Right-2 */}
        <div className="w-full h-full relative group border border-gray-300 rounded-md overflow-hidden">
          <Image
            src={saleimg3}
            alt="BookImages"
            className="w-150 h-full object-cover group-hover:scale-110 duration-500 ease-in-out opacity-80"
          />
          <div className="absolute  bg-black/40 text-white/80 w-full h-full top-0 left-0 flex items-center ">
            <div className="flex flex-col items-start p-10">
              <p className="text-sm md:text-lg font-medium">
                10% Sale for all books
              </p>
              <p className="text-sm md:text-xl font-semibold">
                Offer on limited time
              </p>
              <Link
                href="#"
                className="bg-white/70 text-black px-8 py-3 rounded-md hover:bg-white duration-300 font-medium"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
