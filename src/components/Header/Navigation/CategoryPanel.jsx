import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const CategoryPanel = ({ openCategoryPanel, isOpenCatPanel }) => {

  const [submenuIndex, setSubmenuIndex] = useState (null)
  const [InnerSubmenuIndex, setInnerSubmenuIndex] = useState (null)

  const openSubmenu = (index)=>{
    if(submenuIndex === index){
      setSubmenuIndex(null);  

    }else{
      setSubmenuIndex(index); 
      
    }
    

  }
   const openInnerSubmenu = (index)=>{
    if(InnerSubmenuIndex === index){
      setInnerSubmenuIndex(null);  

    }else{
      setInnerSubmenuIndex(index); 

    }
    

  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500 flex items-center justify-between">
        Shop By Categories{" "}
        <IoCloseSharp
          onClick={() => openCategoryPanel(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">

          
            <button className="w-full !text-left !justify-start !px-3 ">
              Fashion
            </button>
            </Link>
              {
              submenuIndex === 0 ? (
                <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openSubmenu(0)}/>
                

              ):(
                <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openSubmenu(0)}/>
                
                
              )
            }
            

              {
                submenuIndex === 0 && 
                <ul className="submenu  w-full pl-3 ">
              <li className="list-none relative mb-1">
                <Link to="/" className="w-full">
                <button className="w-full !text-left !justify-start !px-3 ">
                  Apparel
                </button>
                </Link>

                {
                  InnerSubmenuIndex === 0 ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openInnerSubmenu(0)} />


                  ):(
                    <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openInnerSubmenu(0)}/>

                  )
                }
              
                  {
                    InnerSubmenuIndex === 0 && 
                      <ul className="inner_submenu  w-full pl-3 ">
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Smart Tablet
                </Link>
              </li>
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Creap T-Shirt
                </Link>
              </li>
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Leather Watch
                </Link>
              </li>
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Rolling Diamond
                </Link>
              </li>
            </ul>
                  }
              
              </li>
            </ul>
                
              }
            
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">

          
            <button className="w-full !text-left !justify-start !px-3 ">
              Outerwear
            </button>
            </Link>
              {
              submenuIndex === 1 ? (
                <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openSubmenu(1)}/>
                

              ):(
                <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openSubmenu(1)}/>
                
                
              )
            }
            

              {
                submenuIndex === 1 && 
                <ul className="submenu  w-full pl-3 ">
              <li className="list-none relative mb-1">
                <Link to="/" className="w-full">
                <button className="w-full !text-left !justify-start !px-3 ">
                  Apparel
                </button>
                </Link>

                {
                  InnerSubmenuIndex === 1 ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openInnerSubmenu(1)} />


                  ):(
                    <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openInnerSubmenu(1)}/>

                  )
                }
              
                  {
                    InnerSubmenuIndex === 1 && 
                      <ul className="inner_1ubmenu  w-full pl-3 ">
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Smart Tablet
                </Link>
              </li>
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Creap T-Shirt
                </Link>
              </li>
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Leather Watch
                </Link>
              </li>
              <li className="list-none relative mb-1">
                <Link to= "/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                  Rolling Diamond
                </Link>
              </li>
            </ul>
                  }
              
              </li>
            </ul>
                
              }
            
          </li>
          
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={isOpenCatPanel} onClose={() => openCategoryPanel(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
