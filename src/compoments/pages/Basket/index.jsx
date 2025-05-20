import React, { useContext } from "react";
import { OrganContext } from "../../context";
import "./Basket.scss";
import { MdDelete } from "react-icons/md";

const Basket = () => {
  const { basket, setBasket } = useContext(OrganContext);

  const deleteProduct = (el) => {
    const delProduct = basket.filter((item) => item.id !== el);
    setBasket(delProduct);
    localStorage.setItem("basket", JSON.stringify(delProduct));
  };

 

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket-disp">
            {basket.map((el) => (
              <div className="basket-item" key={el._id}>
                <span className="product-card__category">
                  {el.productCategory}
                </span>
                <h3>{el.productName}</h3>
                <img src={el.productUrl} alt={el.productName} />
                <div className="item-info">
                  <p>${el.productPrice}</p>
                  <h2>
                    {" "}
                    <MdDelete onClick={() => deleteProduct(el.id)} />{" "}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="basket-bar">
            <div className="basket-bar__block">
              <div
                className="basket-bar__block--scroll"
                style={{
                  width:
                    basket.length === 1
                      ? "20%"
                      : basket.length === 2
                      ? "40%"
                      : basket.length === 3
                      ? "60%"
                      : basket.length === 4
                      ? "80%"
                      : basket.length === 5
                      ? "100% "
                      : "0%",

                  background:
                    basket.length === 1
                      ? "green"
                      : basket.length === 2
                      ? "yellowgreen"
                      : basket.length === 3
                      ? "yellow"
                      : basket.length === 4
                      ? "orange"
                      : basket.length === 5
                      ? "red"
                      : "red",
                }}
              >
                <h2>
                  {basket.length === 1
                    ? "20%"
                    : basket.length === 2
                    ? "40%"
                    : basket.length === 3
                    ? "60%"
                    : basket.length === 4
                    ? "80%"
                    : basket.length === 5
                    ? "100% "
                    : "0%"}
                </h2>
              </div>
            </div>
            {basket.length === 5 ? (
              <h3>
                <i>Корзина заполнена!</i>
              </h3>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
