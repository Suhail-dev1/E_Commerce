import React from 'react'

const CartPanel = () => {
  return (
   <>

     <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
          <div className="cartItem w-full flex items-center gap-4">
            <div className="img w-[30%]">
              <img
                src="/1742439887415_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                className="w-full"
              />
            </div>

            <div className="info w-[70%]">
              <h4 className="text-[16px] font-[500]">
                <Link to={'/product/747485'} className="link">
                A Link Kurta With Sharara & Dupatta
                
                </Link>
              </h4>
            </div>
          </div>
        </div>
   
   </>
  )
}

export default CartPanel;