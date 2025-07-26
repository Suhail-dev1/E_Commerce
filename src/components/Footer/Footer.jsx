import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { BsWallet2 } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-6 border-t-1">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <FaShippingFast className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[400]">For all Orders Over $100</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <TbTruckReturn className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[400]">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BsWallet2 className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[400]">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <GoGift className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[400]">Our First Products Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[400]">Contact us Anytime</p>
            </div>
          </div>
          <hr />

          <div className="footer flex  py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - mega Supar Store <br />
                507-Union Trade Center Frnace
              </p>
              <Link
                className="link  text-[13px]"
                to="mailto:someone@example.com"
              >
                SuhailAnsari3695@gmail.com
              </Link>
              <span className="text-[22px] font-[500] block w-full mt-3 mb-5 text-primary">
                (+91)7460902506
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="text-[16px] font-[500] ">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Prices Drop{" "}
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Store{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Terms And Conditions of use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">SUBSCRIBE</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white"/>
              </Link>
            </li>
             <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <CiYoutube  className="text-[18px] group-hover:text-white"/>
              </Link>
            </li>
             <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaPinterestP className="text-[15px] group-hover:text-white"/>
              </Link>
            </li>
             <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                < FaInstagram className="text-[15px] group-hover:text-white"/>
              </Link>
            </li>
          </ul>
          <p className="text-[13px] items-center mb-0">@2025 -Ecommerce software by PrestaShop</p>
          <div className="flex items-center gap-2">
            <img src="master_card.png" alt="master card image" />
            <img src="paypal.png" alt="paypal card image" />
            <img src="visa.png" alt="visa image" />
            <img src="american_express.png" alt="american card image" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
