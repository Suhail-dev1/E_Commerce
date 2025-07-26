import React from "react";
import { MdAccessTime } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";



const BolgItems = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          className="w-full transition-all group-hover:scale-105"
          alt="image"
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
          <MdAccessTime className="text-[16px]" /> 5 April 2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className=" text-[16px] font-[600] text-black">
          <Link to="/" className="link">Nullam ullamcorper ornare molestie</Link>
        </h2>
        <p className ="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque porro
          assumenda possimus....
        </p>
        <Link className="link font-[500] text-[14px] flex items-center gap-0">Read More<IoChevronForward /> </Link>
      </div>
    </div>
  );
};

export default BolgItems;
