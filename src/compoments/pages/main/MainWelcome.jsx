import React from "react";
import OurProduct from "../ui/OurProduct";
import Image from "../../../../src/assets/images/Image.png";
import Hero from "../../../../src/assets/images/hero text.png";
import { FaChevronCircleRight } from "react-icons/fa";
import "./MainWelcome.scss";

const MainWelcome = () => {
  
  return (
    <div id="mainwelcome">
      <div className="container">
        <div className="mainwelcome">
          <OurProduct />
        </div>
      </div>
    </div>
  );
};

export default MainWelcome;
