import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";





const QtyBox = () => {
    const [qtyVal, setQytVal] = useState(1)

  const pluseQty = () => {
  setQytVal(qtyVal +  1);
};

 const minusQty = () => {
  if(qtyVal > 1){
    setQytVal(qtyVal - 1); 
  }
};

  return (
    <>
    <div className="qtyBox flex items-center border border-gray-300 rounded-md w-full overflow-hidden h-[40px]">
      <input
        type="number"
        value={qtyVal}
        className="w-full px-3 py-2 text-[14px] focus:outline-none text-center"
      />
      <div className="flex flex-col justify-center items-center bg-gray-100 h-full">
        <Button className="!min-w-[25px] !w-[25px] !h-[20px] !p-0 !text-black !rounded-none " onClick={pluseQty}>
          <FaAngleUp className="text-[12px] opacity-55" />
        </Button>
        <Button className="!min-w-[25px] !w-[25px] !h-[20px] !p-0 !text-black !rounded-none" onClick={minusQty}>
          <FaAngleDown className="text-[12px] opacity-55"/>
        </Button>
      </div>


      
    </div>
    </>
  );
};

export default QtyBox;
