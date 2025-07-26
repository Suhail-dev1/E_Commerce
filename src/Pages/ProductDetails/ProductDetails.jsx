import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider'
import ProductDetailsModal from "../../components/ProductDetailsModal/ProductDetailsModal";

const ProductDetails = () => {
  
  const [activeTab, setActiveTab] = useState(null);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="link">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/" className="link">
                Fashion
              </Link>

              <Link
                underline="hover"
                color="inherit"
                className="link transition !text-[14px]"
              >
                Cropped Staion Bomber Jacket
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-5 ">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>
          <div className="productContent w-[50%] pr-10 pl-8 mt-2">
            <ProductDetailsModal/>
        
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product
            </span>
            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>
          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <h4>Lightweight Design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <h4>Free shiping & Return</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <h4>Money Back Guarantee</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <h4>Online support</h4>
              <p>
                "Get fast, reliable help anytime with our 24/7 online support."
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Stand Up
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded (w/o wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded(w/wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className=" w-full productReviewsContainer">
                <h2>Customer questions & ansawers</h2>
                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="/IMG_20230901_095304_008-removebg-preview.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%] ">
                        <h4 className="text-[14px]">Suhail Rana</h4>
                        <h5 className="text-[13px] mb-0">2025-08-23</h5>
                        <p className="text-[12px] mt-0 mb-0">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Illum eveniet eos inventore modi autem sunt
                          ducimus vel dolores voluptate nemo eius, maiores sint
                          quia eum illo suscipit quasi, dignissimos doloremque!
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4.5} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="/IMG_20230901_095304_008-removebg-preview.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%] ">
                        <h4 className="text-[14px]">Suhail Rana</h4>
                        <h5 className="text-[13px] mb-0">2025-08-23</h5>
                        <p className="text-[12px] mt-0 mb-0">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Illum eveniet eos inventore modi autem sunt
                          ducimus vel dolores voluptate nemo eius, maiores sint
                          quia eum illo suscipit quasi, dignissimos doloremque!
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4.5} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="/IMG_20230901_095304_008-removebg-preview.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%] ">
                        <h4 className="text-[14px]">Suhail Rana</h4>
                        <h5 className="text-[13px] mb-0">2025-08-23</h5>
                        <p className="text-[12px] mt-0 mb-0">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Illum eveniet eos inventore modi autem sunt
                          ducimus vel dolores voluptate nemo eius, maiores sint
                          quia eum illo suscipit quasi, dignissimos doloremque!
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4.5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="/IMG_20230901_095304_008-removebg-preview.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%] ">
                        <h4 className="text-[14px]">Suhail Rana</h4>
                        <h5 className="text-[13px] mb-0">2025-08-23</h5>
                        <p className="text-[12px] mt-0 mb-0">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Illum eveniet eos inventore modi autem sunt
                          ducimus vel dolores voluptate nemo eius, maiores sint
                          quia eum illo suscipit quasi, dignissimos doloremque!
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4.5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="/IMG_20230901_095304_008-removebg-preview.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%] ">
                        <h4 className="text-[14px]">Suhail Rana</h4>
                        <h5 className="text-[13px] mb-0">2025-08-23</h5>
                        <p className="text-[12px] mt-0 mb-0">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Illum eveniet eos inventore modi autem sunt
                          ducimus vel dolores voluptate nemo eius, maiores sint
                          quia eum illo suscipit quasi, dignissimos doloremque!
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4.5} readOnly />
                  </div>

                  <br />
                  <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                    <h2 className="text-[18px]">Add a review</h2>
                    <form action="" className="w-full mt-5">
                      <TextField
                        id="outlined-multiline-static"
                        label="Write a Review...."
                        multiline
                        rows={5}
                        className="w-full "
                      />
                      <br /><br />
                      
                      <Rating name="size-small" value={5}  />

                      <div className="flex items-center mt-5">
                        <Button className="btn-org">Submit Review</Button>

                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}



        </div>

        <div className="container">
          <h2 className="text-[20px] font-[600]">Related Products</h2>
          <ProductsSlider items={6} />

        </div>
      </section>
    </>
  );
};

export default ProductDetails;
