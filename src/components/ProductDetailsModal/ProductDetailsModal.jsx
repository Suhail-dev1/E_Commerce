import {useState} from 'react'
import QtyBox from "../QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";


const ProductDetailsModal = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
        <h1 className="text-[22px] font-[500] mb-4">
              Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women
              Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text[13px]">
                Brands :{" "}
                <span className="font-[500] text-black opacity-75">
                  House of Chikankari
                </span>
              </span>
              <Rating name="read-only" value={4.5} size="small" readOnly />
              <span className="text-[13px] cursor-pointer">Review (5)</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <span className="line-through text-gray-400">₹1650</span>
              <span className="text-pink-600 font-bold">₹1450</span>
              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>
            <p className="mt-3  mb-5 !text-[14px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>
            <p className="text-[14px] mt-45 mb-2">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center  gap-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QtyBox />
              </div>
              <Button className="btn-org flex gap-2">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <span className="flex items-center gap-3 text-[15px] link cursor-pointer font-[500]">
                {" "}
                <FaRegHeart className="text-[18px]" />
                Add to Wishlist
              </span>
              <span className="flex items-center gap-3 text-[15px] link cursor-pointer font-[500]">
                {" "}
                <IoGitCompare className="text-[18px]" />
                Add to Compare
              </span>
            </div>
    </>
  )
}

export default ProductDetailsModal