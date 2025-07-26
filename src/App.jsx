import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
//====================================//
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsModal from "./components/ProductDetailsModal/ProductDetailsModal";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Drawer from "@mui/material/Drawer";
import CartPanel from "./components/CartPanel";


const MyContext = createContext();

const App = () => {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
  };

  return (
    <>
      <Router>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route />
            <Route />
            <Route />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </Router>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModaContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]"
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp className="text-[22px]" />
            </Button>
            <div className="col1 w-[50%] px-3 ">
              <ProductZoom />
            </div>
            <div className="productContent w-[50%] py-8 px-8 pr-16  ">
              <ProductDetailsModal />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cart Panel */}

      <Drawer
        open={openCartPanel}
        onClose={toggleCartPanel(false)}
        anchor={"right"}
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
          <h4>Shopping Cart (1)</h4>
          <IoCloseSharp
            className="text-[20px] cursor-pointer"
            onClick={toggleCartPanel(false)}
          />
        </div>

       <CartPanel/>
      </Drawer>
    </>
  );
};

export default App;

export { MyContext };
