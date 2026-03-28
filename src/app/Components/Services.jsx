import Image from "next/image";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCoinTaka } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 py-10 justify-items-center gap-16">
      <div className="flex items-center gap-2">
        <TbTruckDelivery className="text-5xl text-blue-600" />
        <div>
          <h1 className="uppercase font-bold">free delivery</h1>
          <p className="max-w-36 text-sm">Free shipping on all order</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <TbCoinTaka className="text-5xl text-blue-600" />
        <div>
          <h1 className="uppercase font-bold">free delivery</h1>
          <p className="max-w-36 text-sm">Back gurantee under 7 days</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <BiSupport className="text-5xl text-blue-600" />
        <div>
          <h1 className="uppercase font-bold">free delivery</h1>
          <p className="max-w-36 text-sm">Free shipping on all order</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MdOutlinePayment className="text-5xl text-blue-600" />
        <div>
          <h1 className="uppercase font-bold">free delivery</h1>
          <p className="max-w-36 text-sm">Free shipping on all order</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
