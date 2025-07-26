import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./sidebar.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";
const Sidebar = () => {
  FaAngleDown;

  const [isOpened, setOpened] = useState(true);
  const [isOpenedAvailabilityFilter, setOpenedAvailabilityFilter] =
    useState(true);
  const [isOpenedSizeFilter, setOpenedSizeFilter] = useState(true);

  const closeHandler = () => {
    setOpened((prev) => !prev);
  };
  const closeHandlerFilter = () => {
    setOpenedAvailabilityFilter((prev) => !prev);
  };
  const closeHandlerSizeFilter = () => {
    setOpenedSizeFilter((prev) => !prev);
  };

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5 ">
          Shop By Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={closeHandler}
          >
            {isOpened ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpened}>
          <div className="scroll px-3">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Home Decor"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Books"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Toys"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Kitchen"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5 ">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={closeHandlerFilter}
          >
            {isOpenedAvailabilityFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenedAvailabilityFilter}>
          <div className="scroll px-3">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not available (1)"
              className="w-full"
            />
            
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5 ">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={closeHandlerSizeFilter}
          >
            {isOpenedSizeFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenedSizeFilter}>
          <div className="scroll px-3">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (6)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (15)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (7)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (1)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (3)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5 ">
          {" "}
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange ">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs:100</strong>
          </span>

          <span className="ml-auto text-[13px]">
            From:<strong className="text-dark">Rs:{5000} </strong>
          </span>
        </div>
      </div>

       <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5 ">
          {" "}
          Filter By Rating
        </h3>
          
         <div className="w-full">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />

         </div>
          <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />

         </div>
          <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />

         </div>
          <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />

         </div>
          <div className="w-full">
          <Rating name="size-small" defaultValue={1} size="small" readOnly />

         </div>
       
      </div>
    </aside>
  );
};

export default Sidebar;
