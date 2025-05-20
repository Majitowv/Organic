import React, { useContext, useState } from "react";
import { OrganContext } from "../../context";
import "./OurProduct.scss";
import Img from "../../../../src/assets/images/Categories.png";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

const OurProduct = () => {
  const { product, basket, setBasket } = useContext(OrganContext);
  const [count, setCount] = useState(3);

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
  

  return (
    <div id="ourproduct">
      <div className="container">
        <img className="ourproduct__img" src={Img} alt="Products" />
        <h1 className="ourproduct__title">Our Products</h1>
        <div className="ourproduct__grid">
          {product.slice(0, count).map((el) => {
            const isInBasket = basket.some((item) => item.id === el.id);
            return (
              <div className="product-card" key={el.id}>
                <h2
                  onClick={() => AddToBasket(el)}
                  className={isInBasket ? "in-basket" : ""}
                  title={isInBasket ? "Already in basket" : "Add to basket"}
                >
                  <CiCirclePlus />
                </h2>
                <span className="product-card__category">{el.productCategory}</span>
                <Link to={`/Details/${el.id}`}>
                  <img src={el.productUrl} alt="img" className="product-card__image" />
                </Link>
                <h3 className="product-card__name">{el.productName}</h3>
                <div className="product-card__footer">
                  <div className="price">
                    <span className="old-price">$20.00</span>
                    <span className="new-price">${el.productPrice}</span>
                  </div>
                  <div className="rating">★★★★★</div>
                </div>
              </div>
            );
          })}
        </div>

        {count < product.length && (
          <button className="load-more" onClick={() => setCount(count + 3)}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default OurProduct;
