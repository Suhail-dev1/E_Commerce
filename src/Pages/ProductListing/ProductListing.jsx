import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Productsitems from "../../components/ProductsItems/Productsitems";

import { Button } from "@mui/material";
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductsitemsListView from "../../components/ProductsItemsListView/ProductsitemsListView";
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
  const [itemView, setitemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section>
      <div className="py-5 pb-0">
        <div className="container">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="link">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/" className="link">
                Fashion
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className="bg-white p-2 mt-4">
          <div className="container flex gap-3">
            <div className="sidebarWrapper w-[20%] h-full bg-white">
              <Sidebar />
            </div>

            <div className="rightContent w-[80%] mx-auto p-4 py-3">
              <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
                <div className="col1 felx items-center gap-3">
                  <Button
                    className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]"
                    onClick={() => setitemView("list")}
                  >
                    <LuMenu className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                  </Button>
                  <Button
                    className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]"
                    onClick={() => setitemView("grid")}
                  >
                    <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                  </Button>

                  <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0.0.7)]">
                    There are 27 products
                  </span>
                </div>
                <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                  <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0.0.7)]">
                    Sort By
                  </span>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="!bg-white !text-[12px] !text-[#000] !capitalize border !border-[#000]"
                  >
                    Sales, highest to lowest
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        "aria-labelledby": "basic-button",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[13px] !text-[#000] !capitalize"
                    >
                      Sales, highest to lowest
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[13px] !text-[#000] !capitalize"
                    >
                      Relevance
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[13px] !text-[#000] !capitalize"
                    >
                      Name, A to Z
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[13px] !text-[#000] !capitalize"
                    >
                      Name, z to A
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[13px] !text-[#000] !capitalize"
                    >
                      Price, low to high
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className=" !text-[13px] !text-[#000] !capitalize"
                    >
                      Price, high to low
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div
                className={`grid ${
                  itemView === "grid"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                    : "grid-cols-1"
                } gap-[12px] px-2`}
              >
                {itemView === "grid" ? (
                  <>
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                    <Productsitems />
                  </>
                ) : (
                  <>
                    <ProductsitemsListView />
                    <ProductsitemsListView />
                    <ProductsitemsListView />
                    <ProductsitemsListView />
                    <ProductsitemsListView />
                    <ProductsitemsListView />
                    <ProductsitemsListView />
                    <ProductsitemsListView />
                  </>
                )}
              </div>
             <div className="flex items-center justify-center mt-10">
               <Pagination count={10} color="primary" />
             </div>
            </div>
            
          </div>
          
           
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
