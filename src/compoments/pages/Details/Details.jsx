import React, { useEffect, useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import OurProduct from "../ui/OurProduct";
import { OrganContext } from "../../context";
import Banner from "../../../../src/assets/images/Shop single.png";
import Foot from "../../../../src/assets/images/Backgroundfooter.png";

const Details = () => {
  const { detailsId } = useParams();
  const { product } = useContext(OrganContext);
  const [details, setDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
    const { basket, setBasket } = useContext(OrganContext);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  function getDtl() {
    const send = product?.find((el) => el.id.toString() === detailsId);
    setDetails(send);
  }

  function AddToBasket(el) {
    let res = JSON.parse(localStorage.getItem("basket")) || [];

    const index = res.findIndex((item) => item.id === el.id);

    if (index === -1) {
      res.push({ ...el, quantity: 1 });
    } else {
      res[index].quantity += 1;
    }

    localStorage.setItem("basket", JSON.stringify(res));
    setBasket(res);
  }
  

  useEffect(() => {
    window.scroll(0,0)
    getDtl();
  }, [detailsId, product]);

  if (!details) return;

  return (
    <div id="details">
      <img
        src={Banner}
        alt="img"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          minHeight: "60vh",
          display: "block",
          marginBottom: "100px",
        }}
      />
      <div className="container">
        <div className="details">
          <span className="product-card__category">
            {details.productCategory}
          </span>
          <img
            src={details.productUrl}
            alt={details.productName}
            className="details__image"
          />
          <div className="product-text">
            <h1 className="details__name">{details.productName}</h1>
            <div className="rating">★★★★★</div>
            <p className="details__description">{details.productDescription}</p>
            <div className="price">
              <span className="old-price">$20.00</span>
              <span className="new-price">${details.productPrice}</span>
            </div>
            <div className="product-quantity-button">
              <div className="quantity-container">
                <span className="label">Quantity:</span>
                <div className="counter">
                  <button className="decrease" onClick={decreaseQuantity}>
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button className="increase" onClick={increaseQuantity}>
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => AddToBasket(details)} className="add-to-cart">
                Add to Cart <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="detail-product">
          <div className="product-btn">
            <button className="blue">Product Description</button>
            <button className="white">Additional Info</button>
          </div>
          <p>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,{" "}
            <br /> ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple <br /> sugars — such as glucose and fructose — make up
            70% and 80% of the carbs in raw.
          </p>
        </div>
        <OurProduct />
       
      </div>
    </div>
  );
};

export default Details;
