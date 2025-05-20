import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import MainWelcome from "./MainWelcome";
import OurProduct from "../ui/OurProduct";
import MainCategory from "./MainCategory";
import Image from "../../../../src/assets/images/Image.png";
import "./MainPages.scss"
import { FaChevronCircleRight } from "react-icons/fa";
import Hero from "../../../../src/assets/images/hero text.png";




const MainPages = () => {
  
  return (
    <div id="mainpages">
      <img
        src={Image}
        alt="img"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          backgroundRepeat: "no-repeat",
        }}
      />
       <div className="img-text">
              <img src={Hero} alt="img" />
              <h1>Choose the best  <br />healthier way <br /> of life</h1>
              <button>Explore Now <FaChevronCircleRight/> </button>
            </div>
      <div className="container">
        <div className="mainpages">
          <MainCategory />
          <MainWelcome />
          {/* <Subscribe/> */}
        </div>
      </div>
    </div>
  );
};

export default MainPages;
