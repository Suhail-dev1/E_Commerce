import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from "../../App";

const Productsitems = () => {

  const context = useContext(MyContext);
  return (
    <div className="bg-white rounded-md border border-gray-200 hover:shadow-md transition group relative overflow-hidden w-full">
      {/* Image with zoom on hover */}
      <div className="relative h-[250px] w-full overflow-hidden">
        <Link to="#">
          <img
            src="https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"
            alt="Product"
            className="w-full h-[130%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </Link>

        {/* Discount badge */}
        <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-[2px] rounded">
          10%
        </span>

        {/* Hover action icons */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2 z-10">
          <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white text-black hover:bg-pink-600 hover:text-white shadow-sm">
            <FaRegHeart size={16} />
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white text-black hover:bg-pink-600 hover:text-white shadow-sm">
            <IoGitCompareOutline size={16} />
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white text-black hover:bg-pink-600 hover:text-white shadow-sm" onClick={()=>context.setOpenProductDetailsModal(true)}>
            <MdOutlineZoomOutMap size={16} />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3">
        <h6 className="text-[10x] text-gray-500  font-medium mb-1">
          Clafoutis
        </h6>
        <h3 className="text-[14px] font-semibold text-gray-600 leading-snug line-clamp-2 mb-1 hover:text-pink-600 transition">
          Men Opaque Casual Shirt
        </h3>

        <Rating name="read-only" value={4.5} size="small" readOnly />

        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="line-through text-gray-400">₹1650</span>
          <span className="text-pink-600 font-bold">₹1450</span>
        </div>

        <Button
          variant="outlined"
          startIcon={<IoCartOutline size={16} />}
          className="!text-pink-600 !border-pink-600 !text-xs !font-semibold !py-1 !mt-2 hover:!bg-pink-600 hover:!text-white w-full"
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default Productsitems;

