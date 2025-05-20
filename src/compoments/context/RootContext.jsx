import React, { useState, useEffect } from "react";
import { OrganContext} from "../context"
import axios from 'axios';
import { data } from "react-router-dom";


const RootContext = ({ children }) => {
    const [product, setProduct]  = useState([])
    const [basket, setBasket] = useState([])


    async function getProduct() {
      let res = await axios(
        `https://6816fa3026a599ae7c390307.mockapi.io/Organic`
      );
      let { data } = res;
      setProduct(data);
      console.log(data);
      
    }

    function getBasket() {
      let res = JSON.parse(localStorage.getItem("basket")) || [];
      setBasket(res);
    }
  

    useEffect(() => {
      getBasket()
      getProduct()
    },[]); 
  
  return (
    <OrganContext.Provider
      value={{
       product,
       setProduct,
       basket, setBasket
      }}
    >
      {children}
    </OrganContext.Provider>
  );
};

export default RootContext;
