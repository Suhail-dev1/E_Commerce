import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import CategoryPanel from "./CategoryPanel";
import "./style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = (state) => {
    setIsOpenCatPanel(state);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-between gap-4">
          {/* Category Button */}
          <div className="col_1 w-[25%]">
            <Button
              className="!text-black gap-2"
              onClick={() => openCategoryPanel(true)}
            >
              <IoMenu className="text-[18px]" />
              Shop by Categories
              <FaAngleDown className="text-[13px] ml-auto font-bold cursor-pointer" />
            </Button>
          </div>

          {/* Static Menu Links */}
          <div className="col_2 w-[60%] nav">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5052] !py-4">
                    {" "}
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative ">
                <Link
                  to="/productlisting"
                  className="link transition text-[16px] font-[500] inline-block"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    {" "}
                    Fashion
                  </Button>
                </Link>
                {/* Submenu */}
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <div className="relative w-full">
                        <Link to="/" className="w-full">
                          <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                            Men
                          </Button>
                        </Link>

                        {/* Submenu goes outside Link */}
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Footer
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Watch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Pents
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none ">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <button className="link transtition !font-[500] !py-4">
                    Electronics
                  </button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <button className="link transtition !font-[500] !py-4">
                    Bags
                  </button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <button className="link transtition !font-[500] !py-4">
                    Footwear
                  </button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <button className="link transtition !font-[500] !py-4">
                    Groceries
                  </button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <button className="link transtition !font-[500] !py-4">
                    Beauty
                  </button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <button className="link transtition !font-[500] !py-4">
                    Wellness
                  </button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[16px] font-[500]">
                  <button className="link transtition !font-[500] !py-4">
                    Jewellery
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <HiOutlineRocketLaunch className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Categories panel */}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
