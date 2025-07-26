import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  return (
    <div className="scroll">
      <ul className="w-full">
        {/* First Category */}
        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className="w-full">
            <button className="w-full !text-left !justify-start !px-3">
              Fashion
            </button>
          </Link>

          {submenuIndex === 0 ? (
            <FiMinusSquare
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(0)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(0)}
            />
          )}

          {submenuIndex === 0 && (
            <ul className="submenu w-full pl-3">
              <li className="list-none relative mb-1">
                <Link to="/" className="w-full">
                  <button className="w-full !text-left !justify-start !px-3">
                    Apparel
                  </button>
                </Link>

                {innerSubmenuIndex === 0 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(0)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(0)}
                  />
                )}

                {innerSubmenuIndex === 0 && (
                  <ul className="inner_submenu w-full pl-3">
                    {["Smart Tablet", "Creap T-Shirt", "Leather Watch", "Rolling Diamond"].map((item, i) => (
                      <li key={i} className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* Second Category */}
        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className="w-full">
            <button className="w-full !text-left !justify-start !px-3">
              Outerwear
            </button>
          </Link>

          {submenuIndex === 1 ? (
            <FiMinusSquare
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(1)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(1)}
            />
          )}

          {submenuIndex === 1 && (
            <ul className="submenu w-full pl-3">
              <li className="list-none relative mb-1">
                <Link to="/" className="w-full">
                  <button className="w-full !text-left !justify-start !px-3">
                    Apparel
                  </button>
                </Link>

                {innerSubmenuIndex === 1 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(1)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(1)}
                  />
                )}

                {innerSubmenuIndex === 1 && (
                  <ul className="inner_submenu w-full pl-3">
                    {["Smart Tablet", "Creap T-Shirt", "Leather Watch", "Rolling Diamond"].map((item, i) => (
                      <li key={i} className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CategoryCollapse;
