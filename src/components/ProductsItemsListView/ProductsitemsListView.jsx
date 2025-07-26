import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline, IoCartOutline } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";


const ProductsitemsListView = () => {
   const context = useContext(MyContext);

  return (
    <div className="w-full bg-[#f9f9f9] p-4 rounded-md shadow-sm flex gap-5 items-start hover:shadow-md transition group">
      {/* Image Section */}
      <div className="relative w-[200px] h-[250px] shrink-0 overflow-hidden rounded-md">
        <Link to="/">
          <img
            src="https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"
            alt="Product"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </Link>

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          10%
        </span>

        {/* Individual Action Icons */}
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
      <div className="flex flex-col justify-between flex-grow mt-6 pl-4">
        <div>
          <h6 className="text-sm text-gray-500  mb-1 tracking-wide">
            Clafoutis
          </h6>

          <h3 className="text-[16px] font-semibold text-gray-600 mb-2">
            Men Opaque Casual Shirt
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s...
          </p>

          <div className="flex items-center gap-2 mb-2">
            <Rating name="read-only" value={4} size="small" readOnly />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="line-through text-gray-500 text-[15px]">
              ₹1650
            </span>
            <span className="text-pink-600 font-semibold text-[16px]">
              ₹1450
            </span>
          </div>
        </div>

        {/* Bottom Button */}
        <Button
          variant="outlined"
          className="!text-pink-600 !border-pink-600 !rounded-md !py-1 !px-4 !text-sm !font-semibold hover:!bg-pink-600 hover:!text-white w-fit"
          startIcon={<IoCartOutline size={16} />}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductsitemsListView;
