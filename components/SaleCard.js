import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const Sale = (props) => {
  return (
    <div className=''>
      {/* <div className="p-12 px-14 w-22 h-36 justify-center items-center cursor-pointer rounded grid"> */}
      <div className="px-14 justify-center items-center cursor-pointer rounded grid">
        <Image
          src={props.image_url}
          alt="Su"
          className="w-full h-full rounded"
          priority />
          
        <AiOutlinePlus id='test' className='bg-white  drop-shadow rounded relative w-8 h-8 opacity-80 2xl:bottom-20 2xl:left-12 
                                    xl:bottom-32  xl:left-24 lg:bottom-32  lg:left-24 
                                    md:bottom-20  md:left-16 sm:bottom-20  sm:left-16 '/>
        <span className="text-purple-900 opacity-90 font-bold flex justify-center items-center ">₺{props.price}</span>
        <span className="text-black opacity-70 font-bold flex justify-center items-center ">{props.title}</span>
        <span className="text-black opacity-60 flex justify-center items-center ">{props.quantity}</span>

      </div>
    </div>
  );
};

export default Sale;
